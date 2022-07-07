const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Paperjam`,
    siteUrl: `https://mypaperjam.vercel.app`
  },
  plugins: [{
    resolve: 'gatsby-source-datocms',
    options: {
      "apiToken": process.env.GATSBY_DATO_CMS_API_TOKEN
    }
  }, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: path.join(__dirname, `src`, `images`),
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-snipcart-advanced`,
    options: {
      publicApiKey: process.env.GATSBY_SNIPCART_APIKEY,
      currency: 'eur',
      openCartOnAdd: false,
      useSideCart: true,
      // be careful with this mode cart. The cart in this mode has a bug of scroll in firefox
    },
  }
]
};