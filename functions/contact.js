/* eslint-disable no-console */
const sgMail = require('@sendgrid/mail');

const { SENDGRID_API_KEY, SENDGRID_TO_EMAIL, APP_ORIGIN } = process.env;
// const SENDGRID_API_KEY = '';
// const SENDGRID_TO_EMAIL = '@gmail.com';
// const APP_ORIGIN = '';

sgMail.setApiKey(SENDGRID_API_KEY);

const {
  EMAIL_FIELD,
  NAME_PATTERN,
  NAME_MIN_LENGTH,
  NAME_MAX_LENGTH,
  EMAIL_MIN_LENGTH,
  EMAIL_MAX_LENGTH,
  MESSAGE_MIN_LENGTH,
  MESSAGE_MAX_LENGTH,
} = require('./src/contact-form-validators');

const utils = require('./src/utils/helpers');

const validateOrigin = (event) => !event.headers.origin || event.headers.origin === APP_ORIGIN;
const isSpam = (body) => body.email;

const sanitizeField = (x, minLength, maxLength) => {
  if (!x) {
    return false;
  }
  const val = x.trim();
  const n = val.length;
  if (n < minLength || n > maxLength) {
    return false;
  }
  const sanitized = utils.sanitizeHtml(val);
  return sanitized.length < minLength ? false : sanitized;
};

const sanitizeEmail = (val) => {
  const sanitized = sanitizeField(val, EMAIL_MIN_LENGTH, EMAIL_MAX_LENGTH);
  return sanitized && utils.validateEmail(sanitized) ? sanitized : false;
};

const sanitizeName = (val) => {
  const sanitized = sanitizeField(val, NAME_MIN_LENGTH, NAME_MAX_LENGTH);
  return sanitized && new RegExp(NAME_PATTERN).exec(sanitized) ? sanitized : false;
};

const sanitizeMessage = (val) => sanitizeField(val, MESSAGE_MIN_LENGTH, MESSAGE_MAX_LENGTH);

const sanitize = (body) => {
  const name = sanitizeName(body.name);
  if (!name) {
    return false;
  }
  const email = sanitizeEmail(body[EMAIL_FIELD]);
  if (!email) {
    return false;
  }
  const message = sanitizeMessage(body.message);
  if (!message) {
    return false;
  }
  return { name, email, message };
};

exports.handler = async (event) => {
  if (!validateOrigin(event)) {
    return { statusCode: 401, body: 'Bad origin' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed', headers: { Allow: 'POST' } };
  }

  if (!SENDGRID_API_KEY || !SENDGRID_TO_EMAIL) {
    return {
      statusCode: 500,
      body: 'process.env.{vars} must be defined',
    };
  }

  if (!event.body) {
    return { statusCode: 400, body: 'Bad data' };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: 'Bad data' };
  }
  console.log(body);
  if (isSpam(body)) {
    return { statusCode: 403, body: 'Forbidden' };
  }

  const sanitized = sanitize(body);
  if (!sanitized) {
    return { statusCode: 400, body: 'Bad data' };
  }

  // const { email } = sanitized;

  const aBody = Object.keys(sanitized).map((k) => {
    return `${k}: ${sanitized[k]}`;
  });

  const html = aBody.join('<br><br>');
  const text = aBody.join('\n\n');

  const msg = {
    to: SENDGRID_TO_EMAIL,
    from: SENDGRID_TO_EMAIL,
    subject: 'Contact Form Submission',
    text,
    html,
  };
  console.log(msg);
  try {
    await sgMail.send(msg);
    console.log('ok');

    return {
      statusCode: 200,
      body: 'ok',
    };
  } catch (e) {
    console.error(e.response.body.errors);
    return {
      statusCode: e.code,
      body: e.message,
    };
  }
};
