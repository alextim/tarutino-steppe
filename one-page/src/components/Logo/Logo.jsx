/** @jsx jsx */
import { jsx } from 'theme-ui';

//  sx={{ height: '2.2rem' }}
const Logo = ({ onClick }) => {
  return (
    <a sx={{ mr: '3rem', display: 'flex', alignItems: 'center' }} href="/" onClick={onClick}>
      <img src="/assets/logo.svg" alt="" height="35" width="62" />
    </a>
  );
};

export default Logo;
