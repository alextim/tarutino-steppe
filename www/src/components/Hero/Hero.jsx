/** @jsx jsx */
import { jsx, Heading } from 'theme-ui';
// import { BgImage } from '@ait/common-ui';
import BackgroundImage from 'gatsby-background-image';

import mq from '../../gatsby-plugin-theme-ui/media-queries';

const BgImage = ({ fluid, alt, imgTitle, children }) => {
  console.warn(fluid);
  if (!Array.isArray(fluid)) {
    return (
      <BackgroundImage Tag="section" id="media-test" fluid={fluid} alt={alt} title={imgTitle}>
        {children}
      </BackgroundImage>
    );
  }
  const sources = [
    fluid[0],
    {
      ...fluid[1],
      media: '(min-width: 980px)',
    },
  ];
  return (
    <BackgroundImage Tag="section" id="media-test" fluid={sources} alt={alt} title={imgTitle}>
      {children}
    </BackgroundImage>
  );
};
const styleTitle = {
  fontSize: '2rem',
  [mq.lg]: {
    fontSize: '4.65rem',
  },
};

const styleSubtitle = {
  fontSize: '1.2rem',
  [mq.lg]: {
    fontSize: '2.875rem',
  },
};

const innerWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  height: '100%',
  px: 6,
  textTransform: 'uppercase',
  textShadow: '1px 1px 6px rgba(0, 0, 0, 0.7)',
  textAlign: 'center',
  [mq.md]: {
    lineHeight: 1.25,
  },
};

const Hero = ({ title, subtitle, img, alt, imgTitle }) => {
  if (!img) {
    return (
      <div>
        {title && <h1 sx={styleTitle}>{title}</h1>}
        {subtitle && <p sx={styleSubtitle}>{subtitle}</p>}
      </div>
    );
  }
  //  overlayColor="#04040454"
  return (
    <BgImage alt={alt} title={imgTitle} fluid={img}>
      <div sx={innerWrapperStyle}>
        {title && (
          <Heading as="h1" sx={styleTitle}>
            {title}
          </Heading>
        )}
        {subtitle && <p sx={styleSubtitle}>{subtitle}</p>}
      </div>
    </BgImage>
  );
};

export default Hero;
