/* eslint-disable react/no-array-index-key */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import Img from 'gatsby-image';

import { Section } from '@ait/common-ui';

import makeImagePopupTitle from '../../helpers/makeImagePopupTitle';
import useAuthorPrefix from '../../hooks/useAuthorPrefix';

const innerWrapperStyle = {
  display: 'flex',
  // alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  textAlign: 'center',
};

const itemWrapperStyle = { width: ['100%', '100%', '33.33%'], px: 4, mb: [8, 8, 0] };
const textWrapperStyle = { mt: 3 };

const Features = ({ data, gray, imageStyle }) => {
  const authorPrefix = useAuthorPrefix();
  const { title, subtitle, items } = data;

  return (
    <Section title={title} subtitle={subtitle} gray={gray} noContainer={false}>
      <div sx={innerWrapperStyle}>
        {items.map(({ text, image }, i) => (
          <div key={i} sx={itemWrapperStyle}>
            {image.src && (
              <Img
                fluid={image.src.childImageSharp.fluid}
                alt={image.alt}
                title={makeImagePopupTitle(image.alt, image.author, authorPrefix)}
                sx={imageStyle}
              />
            )}
            <div sx={textWrapperStyle}>{text}</div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Features;
