import React from "react"

const RecipeList = props => (
  <div>
    <pre>{JSON.stringify(props, undefined, 2)}</pre>
  </div>
)

export default RecipeList
