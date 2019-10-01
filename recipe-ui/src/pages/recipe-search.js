import React, { useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import SEO from "../components/seo"
import Layout from "../components/layout"
import RecipeList from "../components/RecipeList"
import { Col, Row, Input } from "antd"

const { Search } = Input

const GET_RECIPES = gql`
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

const RecipeSearch = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const { loading, error, data } = useQuery(GET_RECIPES, {
    variables: { name: `${searchTerm}` },
  })
  return (
    <Layout>
      <SEO title="Home" />
      <Row style={{ paddingBottom: "50px" }}>
        <Col span={12} offset={6}>
          <Search
            placeholder="input search text"
            onSearch={term => setSearchTerm(term)}
            enterButton
            className="search-bar"
          />
        </Col>
      </Row>
      <Row style={{ paddingBottom: "50px" }}>
        <Col span={14} offset={5}>
          {!loading && !error && <RecipeList results={data} />}
        </Col>
      </Row>
    </Layout>
  )
}

export default RecipeSearch
