// const purple60 = '#663399';
const purple30 = '#D9BAE8';

// const grey10 = 'rgba(32, 33, 36, 0.01)';
const grey20 = '#78757a';
const grey30 = 'rgba(32, 33, 36, 0.04)';
const grey40 = 'rgba(32, 33, 36, 0.12)';
const grey50 = 'rgba(32, 33, 36, 0.16)';
// const grey60 = 'rgba(32, 33, 36, 0.21)';
const grey70 = '#dadce0';
const grey90 = '#232129';
// const black80 = '#1B1F23';
const black = '#000';
const white = '#fff';
const lightWhite = 'rgba(255, 255, 255, 0.9)';
// const opaqueLightYellow = 'rgba(255, 229, 100, 0.2)';
const opaqueLightWhite = 'hsla(0, 0%, 100%, 0.2)';
const lightGray = 'hsla(0, 0%, 0%, 0.2)';
const red = 'red';

// const flirt50 = '#DF0195';
const flirt90 = '#9a0167';
const cardinal50 = '#d0103a';
const cardinal90 = '#a10c2d';

const davisGrey = '#5c5a58';
const jet = '#343332';

// const quickSilver = '#a5a39d';
const nickel = '#7F7D76';

// const platinum = '#EBEBEB';
// const silver = '#C0C0C0';
// const queenBlue = '#3A6EA5';
// const yaleBlue = '#004E98';

export const brand = {
  main: flirt90,
  secondLight: cardinal50,
  secondDark: cardinal90,
};

const text = grey90;
const background = white;

const colors = {
  white,
  black,
  text,
  background,
  primary: brand.secondLight,
  secondary: nickel,
  muted: lightGray,
  highlight: brand.secondLight,
  heading: grey90,

  error: red,
  brand,

  brands: {
    // skype:    'rgb(0, 175, 240)',
    viber: '#bcaec7',
    whatsapp: '#25d366',
    telegram: '#0088cc',
  },

  header: {
    text,
    bg: background,
    nav: {
      socialLink: grey20,
      item: {
        text: brand.main,
        borderColor: grey70,
        hoverBg: grey30,
        focusBg: grey40,
        activeBg: grey50,
        boxShadowColor: brand.main,
      },
      languageSwitch: {
        selected: brand.main,
      },
    },
  },

  footer: {
    text: lightWhite,
    bg: nickel,
    highlight: brand.secondLight,
    colophon: {
      top: {
        bg: davisGrey,
      },
      bottom: {
        bg: jet,
      },
    },
  },

  input: {
    focusBoxShadow: 'red',
  },

  button: {
    primaryText: white,
    primaryBg: brand.secondLight,
    primaryBorder: brand.secondLight,
    secondaryText: white,
    secondaryBg: nickel,
    secondaryBorder: nickel,
  },

  modal: {
    text,
    bg: background,
  },

  modes: {
    dark: {
      text: lightWhite,
      background: grey90,
      primary: purple30,
      secondary: lightWhite,
      muted: opaqueLightWhite,
      highlight: brand.secondLight,
      heading: white,
      error: red,

      header: {
        text: lightWhite,
        bg: black,
        nav: {
          socialLink: grey20,
          item: {
            text: brand.main,
            borderColor: grey70,
            hoverBg: grey30,
            focusBg: grey40,
            activeBg: grey50,
            boxShadowColor: brand.main,
          },
        },
      },

      footer: {
        text: lightWhite,
        bg: black,
        highlight: brand.secondLight,
        colophon: {
          top: {
            bg: black,
          },
          bottom: {
            bg: black,
          },
        },
      },

      modal: {
        text: lightWhite,
        bg: black,
      },
    },
  },
};

export default colors;
