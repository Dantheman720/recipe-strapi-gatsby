import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row } from "antd"
import styled from "styled-components"
import CreateRecipe from "../components/CreateRecipe"

const CreateRecipeWrapper = styled.div`
  label {
    display: block;
  }
  justify-content: center;
`

const RecipeCreation = () => (
  <Layout>
    <SEO title="Create Recipes" />
    <CreateRecipeWrapper>
      <Row style={{ textAlign: "center" }}>
        <h1 className="create-recipe-heading">Create New Recipe</h1>
      </Row>
      <CreateRecipe />
    </CreateRecipeWrapper>
  </Layout>
)

export default RecipeCreation
