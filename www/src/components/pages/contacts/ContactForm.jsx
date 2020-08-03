import React from 'react';
import {
  EMAIL_FIELD,
  NAME_MIN_LENGTH,
  NAME_MAX_LENGTH,
  EMAIL_MIN_LENGTH,
  EMAIL_MAX_LENGTH,
  MESSAGE_MIN_LENGTH,
  MESSAGE_MAX_LENGTH,
} from '@ait/contact-form-validators';
import { ContactFormBase } from '@ait/form';

import { useTranslation } from '../../../i18n';

import Spinner from '../../Spinner';
import Button from '../../Button';
import sendData from '../../../services/sendData';

const ContactForm = () => {
  const { t } = useTranslation();

  const NAME_LABEL = t('cf.name');
  const EMAIL_LABEL = 'E-mail';
  const MESSAGE_LABEL = t('cf.message');

  const content = {
    name: {
      label: NAME_LABEL,
      placeholder: t('cf.your_name'),
      validationMessage: {
        required: t('validation.required', { name: NAME_LABEL }),
        length: t('validation.length', {
          name: NAME_LABEL,
          min: NAME_MIN_LENGTH,
          max: NAME_MAX_LENGTH,
        }),
        pattern: t('validation.only_symbols'),
      },
    },
    [EMAIL_FIELD]: {
      label: EMAIL_LABEL,
      placeholder: t('cf.your_email'),
      validationMessage: {
        required: t('validation.required', { name: EMAIL_LABEL }),
        length: t('validation.length', {
          name: EMAIL_LABEL,
          min: EMAIL_MIN_LENGTH,
          max: EMAIL_MAX_LENGTH,
        }),
        invalid: t('validation.invalid', { name: EMAIL_LABEL }),
      },
    },
    message: {
      label: MESSAGE_LABEL,
      placeholder: t('cf.your_message'),
      validationMessage: {
        required: t('validation.required', { name: MESSAGE_LABEL }),
        length: t('validation.length', {
          name: MESSAGE_LABEL,
          min: MESSAGE_MIN_LENGTH,
          max: MESSAGE_MAX_LENGTH,
        }),
      },
    },
  };

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

  const modalContent = {
    error: {
      heading: t('form.error'),
      body: (error) => (
        <>
          <b>{error}</b>
          <p>
            {t('cf.sorry')}
            <br />
            {t('cf.try_later')}
          </p>
        </>
      ),
    },
    loading: {
      heading: t('form.sending'),
      body: t('form.pls_wait'),
      action: (closeModal) => (
        <>
          <Spinner w={2} />
          <Button onClick={closeModal} primary>
            {t('form.cancel')}
          </Button>
        </>
      ),
    },
    success: {
      heading: t('form.success'),
      body: (
        <>
          {' '}
          <p>{t('cf.thanks')}</p>
          <p>{t('cf.we_will_response')}</p>
        </>
      ),
    },
  };

  return (
    <ContactFormBase
      content={content}
      modalContent={modalContent}
      actionControl={<Button type="submit">{t('form.send')}</Button>}
      sendData={sendData}
      getErrorMessage={getErrorTranslation}
    />
  );
};

export default ContactForm;
