import gql from "graphql-tag"

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
