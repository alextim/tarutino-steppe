/* eslint-disable react/no-danger */
/** @jsx jsx */
import { jsx, Heading } from 'theme-ui';
import { graphql } from 'gatsby';

import { Container } from '@ait/common-ui';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

const NotFoundTemplate = ({ data, path, pageContext: { locale } }) => {
  const { translations, address, mainNav, footerNav, socialLinks } = data;

  const { title, metaTitle, metaDescription, html } = data.page;

  const Hero = () => (
    <Container sx={{ textAlign: 'center', my: 8 }}>
      <Heading as="h1" sx={{ fontFamily: 'monospace', fontSize: 12 }}>
        {title}
      </Heading>
    </Container>
  );

  return (
    <Layout
      hero={<Hero title={title} />}
      context={{ translations, address, mainNav, footerNav, socialLinks }}
    >
      <SEO
        locale={locale}
        title={metaTitle}
        description={metaDescription}
        pathname={path}
        noindex
      />
      {html && <div sx={{ textAlign: 'center' }} dangerouslySetInnerHTML={{ __html: html }} />}
    </Layout>
  );
};

export default NotFoundTemplate;

export const pageQuery = graphql`
  query NotFoundPageQuery($id: String!, $locale: String!) {
    page: mdPage(id: { eq: $id }) {
      ...DefaultMdFragment
    }
    address: yaml(fields: { type: { eq: "address" }, locale: { eq: $locale } }) {
      ...AddressFragment
    }
    mainNav: allMainNav(filter: { locale: { eq: $locale } }) {
      edges {
        node {
          title
          to
        }
      }
    }
    footerNav: allFooterNav(filter: { locale: { eq: $locale } }) {
      edges {
        node {
          title
          to
        }
      }
    }
    socialLinks: allYaml(
      filter: { fields: { type: { eq: "social-links" }, locale: { eq: $locale } } }
    ) {
      edges {
        node {
          code
          url
          text
        }
      }
    }
    translations: allYaml(
      filter: { fields: { type: { eq: "translations" }, locale: { eq: $locale } } }
      limit: 1000
    ) {
      edges {
        node {
          key
          value
        }
      }
    }
  }
`;
