const path = require("path")
const slash = require("slash")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
    {
      allStrapiRecipe {
        edges {
          node {
            description
            recipename
            ingredients {
              amount
              measurement
              name
            }
            id
            strapiId
            slug
            excerpt
            picture {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

    if (result.errors) {
        throw new Error(result.errors)
    }

    const { allStrapiRecipe } = result.data

    const recipeTemplate = path.resolve("./src/templates/recipe.js")

    allStrapiRecipe.edges.forEach(edge => {
        createPage({
            path: edge.node.slug,
            component: slash(recipeTemplate),
            context: {
                ...edge.node,
            },
        })
    })
}
