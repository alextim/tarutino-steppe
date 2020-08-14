/** @jsx jsx */
import { jsx } from 'theme-ui';

import SocialLink from './SocialLink';
import Utils from '../../lib/utils';

import Icon from '../Icon';

const wrapStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  py: '1rem',
  mb: '2rem',
  width: '100%',
};

const SocialLinks = ({ items }) => (
  <div sx={wrapStyle}>
    {Object.keys(items).map((key) => (
      <SocialLink
        key={key}
        icon={<Icon iconName={key} />}
        name={Utils.upperFirst(key)}
        to={items[key].to}
        title={items[key].title}
      />
    ))}
  </div>
);

export default SocialLinks;
