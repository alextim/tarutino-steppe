/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';

import { BaseLayout as Layout } from '../components/Layout';

import Section from '../components/Section';
import HalfContent from '../components/HalfContent';
import SectionHalfContent from '../components/SectionHalfContent';

const AboutTemplate = ({ path, data, pageContext: { locale } }) => {
  const { translations, address, mainNav, footerNav, socialLinks } = data;
  const { html, title, metaTitle, description, metaDescription, cover, sections } = data.page;

  return (
    <Layout
      title={title}
      subtitle={description}
      cover={cover}
      context={{ translations, address, mainNav, footerNav, socialLinks }}
    >
      <SEO locale={locale} title={metaTitle} description={metaDescription} pathname={path} />
      <Section text={sections[0].text} noContainer={false} small />
      <Section noContainer noPadding gray>
        <HalfContent items={sections[1].items} fullwidth />
      </Section>
      <SectionHalfContent data={sections[2]} noContainer={false} />
      {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
    </Layout>
  );
};

export default AboutTemplate;

export const pageQuery = graphql`
  query AboutPageQuery($id: String!, $locale: String!) {
    page: mdPage(id: { eq: $id }) {
      html
      ...DefaultFrontmatterFragment
      sections {
        title
        subtitle
        text
        items {
          title
          text
          image {
            src {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
            alt
            author
          }
        }
      }
    }
    address: yaml(fields: { type: { eq: "address" }, locale: { eq: $locale } }) {
      ...AddressFragment
    }
    mainNav: allYaml(filter: { fields: { type: { eq: "main-nav" }, locale: { eq: $locale } } }) {
      edges {
        node {
          title
          fields {
            to
          }
        }
      }
    }
    footerNav: allYaml(
      filter: { fields: { type: { eq: "footer-nav" }, locale: { eq: $locale } } }
    ) {
      edges {
        node {
          title
          fields {
            to
          }
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
