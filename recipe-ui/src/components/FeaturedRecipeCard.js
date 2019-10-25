import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FeaturedRecipeCardWrapper = styled.div`
  max-width: 300px;
  font-size: 1rem;
  margin: 0 2rem;
  box-shadow: 0.2rem 0.2rem 1rem ${props => props.theme.greyBoxShadow};
  img {
    width: 300px;
    height: 300px;
  }
  .content-wrapper {
    margin: 0 1rem 1rem 1rem;
  }
  a,
  a:visited,
  a:hover {
    color: inherit;
    text-decoration: none;
  }
`

const FeaturedRecipeCard = ({ slug, picture, recipename, excerpt }) => (
  <FeaturedRecipeCardWrapper>
    <Link to={`/${slug}`}>
      <img src={picture ? picture.childImageSharp.fixed.src : ""} alt="" />
      <div className="content-wrapper">
        <h3>{recipename}</h3>
        <p>{excerpt}</p>
      </div>
    </Link>
  </FeaturedRecipeCardWrapper>
)
export default FeaturedRecipeCard
