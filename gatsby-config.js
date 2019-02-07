module.exports = {
  siteMetadata: {
    title: 'Ghosthugs.com',
    description: 'One place store for all your IT needs.',
    author: '@vipulbhj',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ghosthugs.com',
        short_name: 'GhostHugs',
        start_url: '/',
        background_color: '#141b23',
        theme_color: '#141b23',
        display: 'standalone',
        icon: 'src/images/logo.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
