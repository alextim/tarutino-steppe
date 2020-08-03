/* eslint-disable no-console */
const functions = require('firebase-functions');
const cors = require('cors')({
  origin: '*',
  methods: 'POST',
  allowedHeaders: 'Content-Type',
});

const APP_ORIGIN = 'https://contact-form-test-ab6ae.web.app';

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
const sendEmail = require('./src/utils/mailer');
const db = require('./src/utils/db');

const validateOrigin = (req) => req.headers.origin === APP_ORIGIN;
const isSpam = (req) => req.body.email;

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

const sanitize = (req) => {
  if (!req.body) {
    return false;
  }
  const name = sanitizeName(req.body.name);
  if (!name) {
    return false;
  }
  const email = sanitizeEmail(req.body[EMAIL_FIELD]);
  if (!email) {
    return false;
  }
  const message = sanitizeMessage(req.body.message);
  if (!message) {
    return false;
  }
  return { name, email, message };
};

exports.contact = functions.https.onRequest((req, res) =>
  cors(req, res, () => {
    if (!validateOrigin(req)) {
      return res.status(401).send('Bad origin');
    }

    if (req.method !== 'POST') {
      return res.status(405).send('Method Not Allowed');
    }

    if (isSpam(req)) {
      return res.status(403).send('Forbidden');
    }

    const sanitized = sanitize(req);
    if (!sanitized) {
      return res.status(400).send('Bad data');
    }

    const data = {
      ip: utils.getRemoteIP(req),
      time: new Date(), // firebase.firestore.FieldValue.serverTimestamp(),
      ...sanitized,
    };

    const { email, name, message } = sanitized;
    const mailOptions = {
      from: email,
      replyTo: email,
      subject: `${name} just messaged me from my website`,
      text: message,
      html: `<p>${message}</p>`,
    };

    const emailsRef = db.collection('emails');
    return emailsRef
      .add(data)
      .then((docRef) => console.log('Document added with ID:', docRef.id))
      .then(() => sendEmail(mailOptions))
      .then(() => res.status(200).send({ success: true }))
      .catch((err) => {
        console.error(err);
        res.status(500).send({ error: err });
      });
  }),
);
