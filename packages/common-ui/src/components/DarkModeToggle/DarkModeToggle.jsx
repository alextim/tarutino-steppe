/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';

// kudos to our friends at narative.co
// https://github.com/narative/gatsby-theme-novela/blob/fb38329e17595df6e846be1d33517ff6125cde4e/src/components/Navigation/Navigation.Header.tsx
// and Aaron Iker
// https://codepen.io/aaroniker/pen/KGpXZo

const iconWrapperStyle = {
  /*
    both padding and appearance are here to help
    Mobile Safari rendering correctly, at least on
    older iOS versions — tested on iOS 12.4.2 / iPhone 5s
  */
  p: 0,
  appearance: 'none',
  alignItems: 'center',
  background: 'transparent',
  borderRadius: '5px',
  border: 0,
  cursor: 'pointer',
  display: 'inline-flex',
  height: '40px',
  justifyContent: 'center',

  /*
    roughly compensates for the additional whitespace of this specific
    "icon button" in relation to its "social icon" siblings',
    leave the left untouched for some separation from the aforementioned
  */
  mr: '-11px',
  opacity: 0.75,

  /*
    allows us to use the default :focus
    outline without the "moon mask" being taken into account
    by the browser when rendering the outline —
    not an ideal solution, but good for now
  */
  overflow: 'hidden',
  position: 'relative',

  /*
    scaling to 75% of the original size
    scales the "moon" shape from 24px to 18px,
    aligning it with the rest of the main nav's
    "social icons"; sun and its rays are slightly larger;
    good for now, too ;-)
  */
  transform: 'scale(0.75)',
  transition: 'opacity 0.3s ease',
  verticalAlign: 'middle',
  width: '40px',

  '&:focus': {
    outline: 0,
  },

  '&:hover': {
    opacity: 1,
  },
};

export default function DarkModeToggle({ color, bg, bp }) {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === 'dark';

  function toggleColorMode(e) {
    e.preventDefault();
    setColorMode(isDark ? 'light' : 'dark');
  }
  const label = isDark ? 'Activate light mode' : 'Activate dark mode';

  const moonMaskStyle = {
    bg,
    borderRadius: '50%',
    border: 0,
    height: '24px',
    opacity: isDark ? 0 : 1,
    position: 'absolute',
    right: 0,
    top: 0,
    transform: `translate(${isDark ? '14px, -14px' : '0, 0'})`,
    transition: 'background 0.25s ease, transform 0.45s ease',
    width: '24px',
  };

  const moonOrSunStyle = {
    border: `${isDark ? '4' : '2'}px solid ${color}`,
    bg: color,
    borderRadius: '50%',
    height: '24px',
    overflow: isDark ? 'visible' : 'hidden',
    position: 'relative',
    transform: `scale(${isDark ? 0.55 : 1})`,
    transition: 'all 0.45s ease',
    width: '24px',

    '&::before': {
      borderRadius: '50%',
      border: `2px solid ${color}`,
      content: '""',
      height: '24px',
      opacity: isDark ? 0 : 1,
      position: 'absolute',
      right: '-9px',
      top: '-9px',
      transform: `translate(${isDark ? '14px, -14px' : '0, 0'})`,
      transition: 'transform 0.45s ease',
      width: '24px',
    },

    '&::after': {
      borderRadius: '50%',
      boxShadow: `0 -23px 0 ${color}, 0 23px 0 ${color}, 23px 0 0 ${color}, -23px 0 0 ${color},
        15px 15px 0 ${color}, -15px 15px 0 ${color}, 15px -15px 0 ${color}, -15px -15px 0 ${color}`,
      content: '""',
      height: '8px',
      left: '50%',
      margin: '-4px 0 0 -4px',
      position: 'absolute',
      top: '50%',
      width: '8px',
      transform: `scale(${isDark ? 1 : 0})`,
      transition: 'all 0.35s ease',

      [bp]: {
        transform: `scale(${isDark ? 0.92 : 0})`,
      },
    },
  };

  return (
    <button
      type="button"
      sx={iconWrapperStyle}
      aria-label={label}
      title={label}
      onClick={toggleColorMode}
    >
      <div sx={moonOrSunStyle} />
      <div sx={moonMaskStyle} />
    </button>
  );
}
