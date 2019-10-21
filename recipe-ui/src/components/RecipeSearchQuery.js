import React, { useState } from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { FaSearch } from "react-icons/fa"
import RecipeList from "./RecipeList"

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

const RecipeSearchQueryWrapper = styled.div`
  grid-column: 2;
  justify-self: center;
  align-self: center;
  width: 100%;
  .search-box {
    position: relative;
    width: 30rem;
    margin: auto;
  }
  input {
    width: 30rem;
    padding: 1rem 2rem;
    font-family: "Josefin Sans", sans-serif;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    outline: none;
    border: 0.1rem solid #adadad;
    border-radius: 10px;
    box-shadow: 0.2rem 0.2rem 1rem #c6c6c6;
    transition: background-color 0.3s;
    margin: 3rem auto;
  }
  .search-icon {
    position: absolute;
    top: 72px;
    right: 20px;
    font-size: 1.3rem;
    cursor: pointer;
  }
`

const RecipeSearchQuery = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const { loading, error, data } = useQuery(GET_RECIPES, {
    variables: { name: `${searchTerm}` },
  })
  return (
    <RecipeSearchQueryWrapper>
      <div className="search-box">
        <input
          type="text"
          className="recipe-search-query"
          value={searchTerm}
          onChange={term => setSearchTerm(term.target.value)}
        />
        <span className="search-icon">
          <FaSearch />
        </span>
      </div>

      {!loading && !error && <RecipeList results={data} />}
    </RecipeSearchQueryWrapper>
  )
}

export default RecipeSearchQuery
