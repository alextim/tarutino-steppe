export { default as EMAIL_FIELD } from './email-field-name';

export const NAME_MIN_LENGTH = 2;
export const NAME_MAX_LENGTH = 40;
export const EMAIL_MIN_LENGTH = 3;
export const EMAIL_MAX_LENGTH = 254;
export const MESSAGE_MIN_LENGTH = 2;
export const MESSAGE_MAX_LENGTH = 256;

export const NAME_PATTERN = /^([a-zA-Zа-яА-ЯієїґҐЄІЇ]+\s)*[a-zA-Zа-яА-ЯієїґҐЄІЇ]+$/;

export const validateNameLength = (x) =>
  x && x.length >= NAME_MIN_LENGTH && x.length <= NAME_MAX_LENGTH;

export const validateEmailLength = (x) =>
  x && x.length >= EMAIL_MIN_LENGTH && x.length <= EMAIL_MAX_LENGTH;

export const validateMessageLength = (x) =>
  x && x.length >= MESSAGE_MIN_LENGTH && x.length <= MESSAGE_MAX_LENGTH;
