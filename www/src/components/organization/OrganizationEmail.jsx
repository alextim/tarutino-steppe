import React from 'react';

import { ObfuscatedIconLink as IconLink } from '../IconLink';
import extraPadding from './extraPadding';

const OrganizationEmail = ({ emails }) =>
  emails.map((email, i) => (
    <IconLink
      key={email}
      icon={i === 0 ? 'envelope' : ''}
      extraStyle={extraPadding}
      email={email}
    />
  ));

export default OrganizationEmail;
