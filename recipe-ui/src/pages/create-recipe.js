import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import CreateRecipe from "../components/CreateRecipe"
import Header from "../components/Header"

const CreateRecipeWrapper = styled.div`
  grid-column: 2;
  h1 {
    text-align: center;
    margin-top: 3rem;
  }
  label {
    display: block;
  }
  //justify-content: center;
`

const RecipeCreation = () => (
  <Layout>
    <SEO title="Create Recipes" />
    <Header />
    <CreateRecipeWrapper>
      <h1 className="create-recipe-heading">Create New Recipe</h1>
      <CreateRecipe />
    </CreateRecipeWrapper>
  </Layout>
)

export default RecipeCreation
