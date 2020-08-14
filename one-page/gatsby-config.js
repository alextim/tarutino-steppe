/* eslint-disable no-console */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config = require('./config/website');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-emotion',
    'gatsby-plugin-theme-ui',

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    // 'gatsby-plugin-remove-serviceworker',
  ],
  siteMetadata: {
    siteUrl: config.siteUrl,
  },
};
