/* eslint-disable react/no-array-index-key */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

import { useAppContext } from '../../context';

const OrganizationPostalAddress = () => {
  const {
    address: {
      legalName,
      postalAddress: { streetAddress, addressLocality, postalCode, addressCountry },
    },
  } = useAppContext();

  // sx={{ fontWeight: 'semibold' }}
  return (
    <React.Fragment>
      <div>{legalName}</div>
      {streetAddress.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
      <div>{`${postalCode}  ${addressLocality}`}</div>
      <div>{addressCountry}</div>
    </React.Fragment>
  );
};

export default OrganizationPostalAddress;
