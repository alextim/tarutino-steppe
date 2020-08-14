/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/** @jsx jsx */
import { jsx } from 'theme-ui';

const Hamburger = ({ w = 2.5, open, bp, onClick }) => {
  const wrapStyle = {
    height: `${w}rem`,
    width: `${w}rem`,
    m: '0 0.5rem 0 -0.5rem',
    cursor: 'pointer',

    [bp]: {
      display: 'none',
      pointerEnts: 'none',
    },
  };

  const innerWrapStyle = {
    position: 'relative',
    top: 0,
    height: '1.3rem',
    width: '1.9rem',
    mt: '1.2rem',
    ml: '0.6rem',
    cursor: 'pointer',
    transform: 'rotate(0deg)',
    transition: '0.5s ease-in-out',
  };

  const commonSpanStyle = {
    content: '""',
    display: 'block',
    position: 'absolute',
    height: '0.125rem',
    width: '1.25rem',
    bg: 'text',
    borderRadius: '1px',
    transition: 'all 300ms ease-in-out',
  };

  const spanStyle = {
    ...commonSpanStyle,
    bg: open ? 'transparent' : 'text',

    '&::before, &::after': {
      ...commonSpanStyle,
    },

    '&::before': {
      top: open ? 0 : '-0.625rem',
      transform: open ? 'rotate(45deg)' : 'none',
    },

    '&::after': {
      top: open ? 0 : '0.625rem',
      bottom: '-0.625rem',
      transform: open ? 'rotate(-45deg)' : 'none',
    },
  };

  return (
    <div sx={wrapStyle} type="button" aria-label="Close" onClick={onClick}>
      <div sx={innerWrapStyle}>
        <span sx={spanStyle} />
      </div>
    </div>
  );
};

export default Hamburger;
