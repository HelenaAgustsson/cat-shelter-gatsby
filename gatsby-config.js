require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'The Cat Shelter',
    description: 'A home for every cat in need',
    menuLinks: [
      {
        name: 'adopt',
        link: '/adopt',
      },
      {
        name: 'shop',
        link: '/shop',
      },
    ],
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-image`,
      options: {
        defaults: {
          placeholder: `dominantColor`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    {
      resolve: '@sentry/gatsby',
    },
  ],
}
