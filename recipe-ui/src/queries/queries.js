import gql from "graphql-tag"
import { graphql } from "gatsby"

export const GET_ALL_RECIPES = graphql`
  query GET_ALL_RECIPES {
    allStrapiRecipe(limit: 3, sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          description
          recipename
          excerpt
          ingredients {
            amount
            measurement
            name
          }
          id
          strapiId
          slug
          picture {
            childImageSharp {
              fixed(height: 300, width: 300) {
                src
              }
            }
          }
          createdAt(formatString: "MM/DD/YYYY")
        }
      }
    }
  }
`

export const GET_RECIPES = gql`
  query GET_RECIPES($name: String!) {
    recipeByName(where: { name: $name }) {
      recipename
      excerpt
      slug
      picture {
        url
      }
    }
  }
`
