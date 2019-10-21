import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedRecipes from "../components/FeaturedRecipes"
import FeaturedContent from "../components/FeaturedContent"
import Header from "../components/Header"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <FeaturedRecipes />
    <FeaturedContent />
  </Layout>
)

export default IndexPage
