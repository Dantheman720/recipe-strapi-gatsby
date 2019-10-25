import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/Header"
import RecipeSearchQuery from "../components/RecipeSearchQuery"

const RecipeSearch = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <RecipeSearchQuery />
    </Layout>
  )
}

export default RecipeSearch
