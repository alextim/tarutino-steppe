/** @jsx jsx */
import { jsx } from 'theme-ui';
import Img from 'gatsby-image';

import ArtImg from '../ArtImg';
// https://markoskon.com/gatsby-background-image-example/

const fakeBgImageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: -1,

  '& > img': {
    objectFit: 'cover !important',
    objectPosition: '0% 0% !important',
  },
};

const BgImage = ({
  fluid,
  title,
  alt,
  height = null,
  mobileHeight = null,
  overlayColor = 'transparent',
  children = null,
}) => {
  // TODO @media screen and (min-width: 600px) {
  if (mobileHeight) {
    fakeBgImageStyle.height = mobileHeight;
  }
  if (height) {
    fakeBgImageStyle['@media screen and (min-width: 600px)'] = {
      height,
    };
  }
  return (
    <div sx={{ position: 'relative', backgroundColor: overlayColor }} title={title}>
      {Array.isArray(fluid) ? (
        <ArtImg
          sx={fakeBgImageStyle}
          fluidMobile={fluid[0]}
          fluidDesktop={fluid[1]}
          breakPoint={480}
          fadeIn={false}
          background
          critical
          alt={alt}
        />
      ) : (
        <Img sx={fakeBgImageStyle} fluid={fluid} alt={alt} />
      )}
      <div
        sx={{
          position: 'absolute',
          top: 0,
          height: '100%',
          width: '100%',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default BgImage;
