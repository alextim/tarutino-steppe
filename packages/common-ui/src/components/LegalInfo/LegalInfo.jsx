import React from 'react';

const LegalInfo = ({ legalName, text }) => {
  return <div>{`© ${new Date().getFullYear()} ${legalName}. ${text}`}</div>;
};

export default LegalInfo;
