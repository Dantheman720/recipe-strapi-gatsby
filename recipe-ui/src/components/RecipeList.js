import React from "react"
import RecipeItem from "./RecipeItem"

const RecipeList = props => (
  <div>
    {props.results.recipeByName.map(result => (
      <RecipeItem {...result} key={result.slug} />
    ))}
  </div>
)

export default RecipeList
