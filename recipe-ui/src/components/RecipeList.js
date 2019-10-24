import React from "react"
import RecipeItem from "./RecipeItem"

const RecipeList = props => (
  <div>
    {props.results.recipeByName.map(result => (
      <RecipeItem {...result} />
    ))}
  </div>
)

export default RecipeList
