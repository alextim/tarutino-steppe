/** @jsx jsx */
import { jsx } from 'theme-ui';

import mq from '../../../gatsby-plugin-theme-ui/media-queries';
import sizes from '../../../gatsby-plugin-theme-ui/sizes';

import MenuItem from './MenuItem';

const styleWrapper = {
  flex: 1,
  minWidth: '50%',

  display: 'flex',
  flexDirection: 'column',
  bg: 'inherit',

  position: 'absolute',
  top: sizes.header[0],
  height: `calc(100vh - ${sizes.header[0]})`,

  // no drop-down submenu
  overflow: 'hidden',
  // overflowY: 'auto',

  transition: 'transform 0.5s linear',
  willChange: 'transform',

  // menu hidden by default on small screens
  pointerEvents: 'none',
  visibility: 'hidden',
  transform: 'translateX(-110 %)',

  width: '100%',
  margin: 'auto',
  left: 0,
  zIndex: 201,

  [mq.lg]: {
    display: 'inline-flex',
    flexDirection: 'row',
    alignIitems: 'center',
    justifyContent: 'space-between',

    position: 'static',
    top: 0,
    height: '100%',

    // no drop-down submenu
    // overflow: 'visible',

    transition: 'unset !important',
    willChange: 'unset !important',

    // menu alwais visible on large screens
    pointerEvents: 'auto !important',
    visibility: 'visible !important',
    transform: 'none !important',
  },
};

const styleMenuWrapper = {
  display: 'flex',
  flexDirection: 'column',
  [mq.lg]: {
    display: 'inline-flex',
    flexDirection: 'row',
    alignIitems: 'center',
  },
};

const styleRightWrapper = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  [mq.lg]: {
    display: 'inline-flex',
    flexDirection: 'row',
    alignIitems: 'center',
  },
};

const styleWrapperOpened = {
  pointerEvents: 'auto',
  visibility: 'visible',
  transform: 'unset',
};

const Menu = ({ navItems, isMenuOpen, onMenuItemClick }) => {
  return (
    <div sx={{ ...styleWrapper, ...(isMenuOpen ? styleWrapperOpened : {}) }}>
      <div sx={styleMenuWrapper}>
        {navItems.map(({ title, to }) => (
          <MenuItem key={to} to={to} onClick={onMenuItemClick}>
            {title}
          </MenuItem>
        ))}
      </div>
      <div sx={styleRightWrapper} />
    </div>
  );
};

export default Menu;
