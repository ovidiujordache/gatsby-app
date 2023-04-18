/**
 * @type {import('gatsby').GatsbyConfig}
 */
if (process.env.DEVELOPMENT) {
    require("dotenv").config({
        path: `.env.${process.env.NODE_ENV}.development`,
    })
} else {
    require("dotenv").config({
        path: `.env.${process.env.NODE_ENV}`,
    })
}


const path = require(`path`)
module.exports = {
    siteMetadata: {
        title: `Quote Magic`,
        description: `A state-of-the-art  quoting tool`,
        image: `./src/images/Footer_Logo.png`,
        siteUrl: `https://glittery-flan-76747f.netlify.app/`
    },

    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        {
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
            }
        },


        "gatsby-plugin-mdx",
        "gatsby-transformer-remark",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        }, {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        }
    ]
};