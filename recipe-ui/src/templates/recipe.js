import React from "react"
import Layout from "../components/layout"
import RecipeTable from "../components/RecipeTable"
import styled from "styled-components"

function ingredientsWithKeys(ingredients) {
  let counter = 0
  return ingredients.map(ingredient => ({
    key: counter++,
    ...ingredient,
  }))
}
const RecipePageWrapper = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  .recipe-description {
    padding: 2rem;
  }
  h1 {
    text-align: center;
    margin: 2rem 0;
  }
  h2 {
    text-align: center;
    margin: 2rem 0;
  }
  img {
    margin: auto;
  }
`
export default ({ pageContext }) => {
  return (
    <Layout>
      <RecipePageWrapper>
        <h1>{pageContext.recipename}</h1>
        <img src={pageContext.picture.childImageSharp.fixed.src} alt="" />
        <h2>Ingredients</h2>
        <RecipeTable
          ingredients={ingredientsWithKeys(pageContext.ingredients)}
          recipeId={pageContext.strapiId}
        />
        <p className="recipe-description">{pageContext.description}</p>
      </RecipePageWrapper>
    </Layout>
  )
}
