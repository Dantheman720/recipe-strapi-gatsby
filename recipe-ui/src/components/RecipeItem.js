import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { localConfig } from "../config"

const CardDescWrapper = styled.div`
  grid-column: 2;
  margin: 0.5rem 2rem;
  font-size: 1rem;
`
const RecipeItemWrapper = styled.div`
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 300px auto;
  width: 75%;
  box-shadow: 0.2rem 0.2rem 1rem ${props => props.theme.greyBoxShadow};
  a {
  }

  img {
    width: 300px;
    height: 300px;
    margin: 0;
  }
`

const RecipeItem = ({ recipename, excerpt, slug, picture }) => (
  <Link to={slug} style={{ color: "inherit" }}>
    <RecipeItemWrapper>
      {picture && (
        <img
          src={`${localConfig.url}${picture.url}`}
          alt="Fully cooked meal!"
        />
      )}
      <CardDescWrapper>
        <h2>{recipename}</h2>
        <p>{excerpt}</p>
      </CardDescWrapper>
    </RecipeItemWrapper>
  </Link>
)

export default RecipeItem
