import React from "react"
import styled from "styled-components"
import { useStaticQuery } from "gatsby"
import FeaturedRecipeCard from "./FeaturedRecipeCard"
import { GET_ALL_RECIPES } from "../queries/queries"

const FeaturedRecipeWrapper = styled.div`
  grid-column: 2;
  h1 {
    text-align: center;
    margin: 3rem 0;
  }
  .recipe-card-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`
const FeaturedRecipes = () => {
  const { allStrapiRecipe } = useStaticQuery(GET_ALL_RECIPES)
  return (
    <FeaturedRecipeWrapper>
      <h1>Latest Tasty Treats!</h1>
      <div className="recipe-card-wrapper">
        {allStrapiRecipe.edges.map(edge => (
          <FeaturedRecipeCard {...edge.node} />
        ))}
      </div>
    </FeaturedRecipeWrapper>
  )
}
export default FeaturedRecipes
