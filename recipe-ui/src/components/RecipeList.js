import React from "react"
import RecipeItem from "./RecipeItem"

const RecipeList = props => (
  <div>
    {props.results.recipeByName.map(result => (
      <RecipeItem {...result} />
    ))}
    {/*<pre>{JSON.stringify(props, undefined, 2)}</pre>*/}
  </div>
)

export default RecipeList
