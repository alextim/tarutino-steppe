/* eslint-disable react/jsx-props-no-spreading */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import Obfuscate from 'react-obfuscate';

import Icon from './Icon';

const styleSpacer = {
  display: 'inline-block',
  width: '1em',
};

const style = { pl: '0.4em' };

const IconLink = ({ children, to, icon, title, extraStyle, ...props }) => {
  return (
    <div
      sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', ...(extraStyle || {}) }}
      title={title}
    >
      {icon ? <Icon iconName={icon} /> : <div sx={styleSpacer} />}
      {to ? (
        <a sx={style} href={to} {...props}>
          {children}
        </a>
      ) : (
        <span sx={style} {...props}>
          {children}
        </span>
      )}
    </div>
  );
};

export const ObfuscatedIconLink = ({ children, icon, title, extraStyle, ...props }) => {
  return (
    <div
      sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', ...(extraStyle || {}) }}
      title={title}
    >
      {icon ? <Icon iconName={icon} /> : <div sx={styleSpacer} />}
      <Obfuscate sx={style} {...props}>
        {children}
      </Obfuscate>
    </div>
  );
};

export default IconLink;
