import React from "react"
import Layout from "../components/layout"
import RecipeTable from "../components/RecipeTable"
import styled from "styled-components"
import Header from "../components/Header"

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
export const IngredientsContext = React.createContext({})

export default ({ pageContext }) => {
  return (
    <Layout>
      <Header />
      <RecipePageWrapper>
        <h1>{pageContext.recipename}</h1>
        <img src={pageContext.picture.childImageSharp.fixed.src} alt="" />
        <h2>Ingredients</h2>
        <IngredientsContext.Provider
          value={{ ingredients: ingredientsWithKeys(pageContext.ingredients) }}
        >
          <RecipeTable recipeId={pageContext.strapiId} />
        </IngredientsContext.Provider>
        <p className="recipe-description">{pageContext.description}</p>
      </RecipePageWrapper>
    </Layout>
  )
}
