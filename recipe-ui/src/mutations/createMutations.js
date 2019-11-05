import gql from "graphql-tag"

export const CREATE_RECIPE_MUTATION = gql`
  mutation CREATE_RECIPE_MUTATION(
    $description: String!
    $recipename: String!
    $ingredients: JSON!
    $slug: String!
    $excerpt: String!
  ) {
    createRecipe(
      input: {
        data: {
          recipename: $recipename
          excerpt: $excerpt
          description: $description
          ingredients: $ingredients
          slug: $slug
        }
      }
    ) {
      recipe {
        id
      }
    }
  }
`

export const MODIFY_RECIPE_ENVIRONMENT = gql`
  mutation MODIFY_RECIPE_ENVIRONMENT($ingredients: JSON!, $recipeId: ID!) {
    updateRecipe(
      input: { where: { id: $recipeId }, data: { ingredients: $ingredients } }
    ) {
      recipe {
        id
        recipename
      }
    }
  }
`
