import React from "react"
import styled from "styled-components"
import RecipeForm from "./RecipeForm"

const CreateRecipeWrapper = styled.div`
  max-width: 75%;
  margin: auto;
`

const CreateRecipe = () => (
  <CreateRecipeWrapper>
    <RecipeForm />
  </CreateRecipeWrapper>
)

export default CreateRecipe
