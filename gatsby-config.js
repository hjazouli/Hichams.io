module.exports = {
  siteMetadata: {
    title: "Hicham's Resume",
    author: "Hicham Jazouli",
    description: "A brief description of my profile, my experiences, and competencies "
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby',
        short_name: 'Resume',
        start_url: '/',
        background_color: '#663000',
        theme_color: '#663000',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
  pathPrefix: "/HResume",
  
}
