module.exports = {
  siteMetadata: {
    title: "imjb",
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
    "gatsby-plugin-react-helmet"
  ],
};
