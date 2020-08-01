/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const wrapStyle = {
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  width: '100%',
};

const linkStyle = {
  mx: '1rem',
  py: 2,
  textTransform: 'uppercase',
  ':hover': {
    color: 'footer.highlight',
  },
};

const FooterNavigation = ({ items }) => (
  <div sx={wrapStyle}>
    {items.map(({ to, title }) => (
      <Link key={to} sx={linkStyle} to={to}>
        {title}
      </Link>
    ))}
  </div>
);

export default FooterNavigation;
