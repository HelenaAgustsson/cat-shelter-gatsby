const path = require("path")
const slash = require("slash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const sspTemplate = path.resolve(`./src/templates/product-page.js`)


  return graphql(`
    {
      ssps:  allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `)

    .then(({ data }) => {
      const { ssps } = data
      ssps.nodes.forEach(({ slug }) => {
        createPage({
          path: slug === "index" ? "/" : `products/${slug}`,
          component: slash(sspTemplate),
          context: {
            slug,
          },
        })
      })
    })

    .catch((error) => {
      console.log("Error retrieving Contentful data", error)
    })

}
