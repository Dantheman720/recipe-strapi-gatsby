import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import FeaturedRecipeCard from "./FeaturedRecipeCard"
import gql from "graphql-tag"

const GET_ALL_RECIPES = graphql`
  query GET_ALL_RECIPES {
    allStrapiRecipe(limit: 3, sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          description
          recipename
          excerpt
          ingredients {
            amount
            measurement
            name
          }
          id
          strapiId
          slug
          picture {
            childImageSharp {
              fixed(height: 300, width: 300) {
                src
              }
            }
          }
          createdAt(formatString: "MM/DD/YYYY")
        }
      }
    }
  }
`
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
