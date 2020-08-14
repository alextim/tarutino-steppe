/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

import mq from '../../gatsby-plugin-theme-ui/media-queries';
import { useTranslation } from '../../i18n';

import ContactForm from './ContactForm';

import useOrganization from '../../hooks/useOrganization';

import OrganizationPostalAddress from '../organization/OrganizationPostalAddress';
import OrganizationPhones from '../organization/OrganizationPhones';
import OrganizationEmail from '../organization/OrganizationEmail';
// import OrganizationSite from '../organization/OrganizationSite';
// import OrganizationCloudPhones from '../organization/OrganizationCloudPhones';
import OrganizationOpeningHours from '../organization/OrganizationOpeningHours';

const cardsWrapperStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  mt: '1rem',
};

const cardHeadingStyle = {
  fontSize: '1.25rem',
  mb: '0.5rem',
};

const wrapperStyle = {
  width: '100%',
  p: '0 1rem 2rem 1rem',
};

const cardWrapperStyle = {
  ...wrapperStyle,
  lineHeight: 1.75,

  'a:hover': {
    color: (t) => t.colors.highlight,
  },

  [mq.lg]: {
    width: 'auto',
  },
};

const Card = ({ title, children }) => (
  <div sx={cardWrapperStyle}>
    <h3 sx={cardHeadingStyle}>{title}</h3>
    {children}
  </div>
);

const contactFormWrapperStyle = {
  width: '100%',
  margin: '1.25rem 0',
  padding: '2rem',
  borderTop: '8px solid transparent',
  boxShadow: '0 5px 13px rgba(0, 0, 0, 0.17)',
  borderImage: `16
    repeating-linear-gradient(
      -45deg,
      red,
      red 1rem,
      transparent 0,
      transparent 2rem,
      #58a 0,
      #58a 3rem,
      transparent 0,
      transparent 4rem
    )`,
};

const Contacts = () => {
  const { t } = useTranslation();
  const { email, phone, openingHours } = useOrganization();

  return (
    <React.Fragment>
      <div sx={cardsWrapperStyle}>
        <Card title={t('contacts.wait_you_on_address')}>
          <OrganizationPostalAddress />
        </Card>

        {openingHours && (
          <Card title={t('contacts.opening_time')}>
            <OrganizationOpeningHours openingHours={openingHours} />
          </Card>
        )}

        <Card title={t('contacts.call_us')}>
          <OrganizationPhones phones={phone} />
          <OrganizationEmail emails={email} />
          {/* <OrganizationSite /> */}
        </Card>

        {/*
        <Card title=" ">
          <OrganizationCloudPhones voice={voice} />
        </Card>
        */}
      </div>

      <div sx={wrapperStyle}>
        <h3 sx={cardHeadingStyle}>{t('contacts.write_us')}</h3>
        <div sx={contactFormWrapperStyle}>
          <ContactForm />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contacts;
