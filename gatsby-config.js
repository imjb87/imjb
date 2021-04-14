module.exports = {
  siteMetadata: {
    title: "IMJB",
    titleTemplate: "%s · imjb",
    description:
      "John Bell, Web Developer. West Yorkshire, UK",
    url: "https://www.imjb.dev", // No trailing slash allowed!
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-6JX7MMMC92",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `imjb`,
        short_name: `imjb`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/logo.svg`
      },
    },    
    "gatsby-plugin-react-helmet"
  ], 
};
