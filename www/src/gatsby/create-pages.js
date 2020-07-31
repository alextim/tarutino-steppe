/* eslint-disable no-console */
const path = require('path');

const wrapper = (promise) =>
  promise.then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    return result;
  });
module.exports = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  console.log('=====createPages=====');
  const result = await wrapper(
    graphql(`
      {
        pages: allMdPage(limit: 1000) {
          edges {
            node {
              id
              template
              slug
              locale
            }
          }
        }
      }
    `),
  );

  if (result.errors) {
    reporter.panic(result.errors);
    return;
  }

  const TEMPLATES_DIR = './src/templates/';
  const pageDefaultTemplate = path.resolve(`${TEMPLATES_DIR}page.jsx`);

  result.data.pages.edges.forEach(({ node: { id, template, slug, locale } }) => {
    console.log('Md page: locale=', locale, ', pagepath=', slug);
    createPage({
      path: slug,
      component: template ? path.resolve(`${TEMPLATES_DIR}${template}.jsx`) : pageDefaultTemplate,
      context: {
        id,
        locale,
      },
    });
  });
};
