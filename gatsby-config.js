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
        spaceId: "zftkd6qhq6hg",
      },
    },
    "gatsby-plugin-styled-components",
  ],
};
