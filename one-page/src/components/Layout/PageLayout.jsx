/** @jsx jsx */
import { jsx } from 'theme-ui';

import { Container } from '@ait/common-ui';

import Layout from './BaseLayout';
import sizes from '../../gatsby-plugin-theme-ui/sizes';

const containerStyle = { mt: sizes.header };

const PageLayout = ({ title, subtitle, cover, hero, context, children }) => (
  <Layout title={title} subtitle={subtitle} cover={cover} hero={hero} context={context}>
    <Container sx={containerStyle}>{children}</Container>
  </Layout>
);

export default PageLayout;
