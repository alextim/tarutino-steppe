import React, { useState } from 'react';
import * as EmailValidator from 'email-validator';
import { InputControl, TextAreaControl, HoneyPotInput } from '@ait/common-ui';
import {
  EMAIL_FIELD,
  NAME_MIN_LENGTH,
  NAME_MAX_LENGTH,
  EMAIL_MIN_LENGTH,
  EMAIL_MAX_LENGTH,
  MESSAGE_MIN_LENGTH,
  MESSAGE_MAX_LENGTH,
  NAME_PATTERN,
  validateNameLength,
  validateEmailLength,
  validateMessageLength,
} from '@ait/contact-form-validators';

import { useTranslation } from '../../../i18n';

import { useForm } from '../../../hooks';
import useModal from '../../Modal';
import Button from '../../Button';
import sendData from '../../../services/sendData';

import ModalContent from './ModalContent';

const AUTOCLOSE_DELAY = 5000; // 5 secs
/*
let timer;
const timeout = (ms) =>
  new Promise((resolve) => {
    timer = setTimeout(resolve, ms);
    return timer;
  });

async function sendDataMock() {
  await timeout(4000);
  // throw new Error('test error');
}
*/

const ContactForm = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  const validateName = (x) => {
    const value = x ? x.trim() : x;
    if (!validateNameLength(value)) {
      return t('validation.length', {
        name: t('cf.name'),
        min: NAME_MIN_LENGTH,
        max: NAME_MAX_LENGTH,
      });
    }
    return '';
  };

  const validateEmail = (x) => {
    const value = x ? x.trim() : x;
    if (!validateEmailLength(value)) {
      return t('validation.length', {
        name: 'E-mail',
        min: EMAIL_MIN_LENGTH,
        max: EMAIL_MAX_LENGTH,
      });
    }
    if (!EmailValidator.validate(value)) {
      return t('validation.invalid', { name: 'E-mail' });
    }
    return '';
  };

  const validateMessage = (x) => {
    const value = x ? x.trim() : x;
    if (!validateMessageLength(value)) {
      return t('validation.length', {
        name: t('cf.message'),
        min: MESSAGE_MIN_LENGTH,
        max: MESSAGE_MAX_LENGTH,
      });
    }
    return '';
  };

  const validationSchema = {
    email: {},
    name: {
      required: t('validation.required', { name: t('cf.name') }),
      validate: validateName,
      pattern: {
        value: NAME_PATTERN,
        message: t('validation.only_symbols'),
      },
    },
    [EMAIL_FIELD]: {
      required: t('validation.required', { name: 'E-mail' }),
      validate: validateEmail,
    },
    message: {
      required: t('validation.required', { name: t('cf.message') }),
      validate: validateMessage,
    },
  };

  const onClose = () => {
    if (loading) {
      // clearTimeout(timer);
      setLoading(false);
    }
  };

  const [Modal, openModal, closeModal] = useModal('portal', { onClose });

  const getErrorTranslation = (err) => {
    switch (parseInt(err, 10)) {
      case 400:
      case 401:
      case 403:
      case 405:
        return t(`error.err${err}`);
      default:
        return t('error.network');
    }
  };

  const onSubmitForm = async (values) => {
    setError('');
    setLoading(true);
    try {
      openModal();
      // await sendDataMock();
      return await sendData(values);
    } catch (err) {
      // clearTimeout(timer);
      setError(getErrorTranslation(err.message));
      return false;
    } finally {
      setLoading(false);
      closeModal(AUTOCLOSE_DELAY);
    }
  };

  const { values, errors, handleOnChange, handleOnSubmit /* , disable */ } = useForm(
    validationSchema,
    onSubmitForm,
  );

  return (
    <>
      <Modal>
        <ModalContent error={error} loading={loading} handleButtonClick={closeModal} />
      </Modal>

      <form onSubmit={handleOnSubmit} noValidate>
        <HoneyPotInput value={values.email} onChange={handleOnChange} />
        <InputControl
          label={t('cf.name')}
          name="name"
          required={validationSchema.name.required}
          placeholder={t('cf.your_name')}
          value={values.name}
          error={errors.name}
          onChange={handleOnChange}
        />
        <InputControl
          label="E-mail"
          name={EMAIL_FIELD}
          type="email"
          required={validationSchema[EMAIL_FIELD].required}
          placeholder={t('cf.your_email')}
          value={values[EMAIL_FIELD]}
          error={errors[EMAIL_FIELD]}
          onChange={handleOnChange}
        />
        <TextAreaControl
          label={t('cf.message')}
          name="message"
          required={validationSchema.message.required}
          placeholder={t('cf.your_message')}
          value={values.message}
          error={errors.message}
          onChange={handleOnChange}
        />
        <Button type="submit">{t('form.send')}</Button>
      </form>
    </>
  );
};

export default ContactForm;
