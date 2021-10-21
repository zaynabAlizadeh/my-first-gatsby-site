module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My First Gatsby Site",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "PBZzgI-TME10TyezKFL00qjWAp8swxsPioAMDZOjM3U",
        spaceId: "",
      },
    },
    "gatsby-plugin-styled-components",
  ],
};
