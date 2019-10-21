import React, { useState } from "react"
import styled from "styled-components"
import Ingredient from "./Ingredient"

const IngredientTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 0 auto;
  .ingredient-table-heading {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr) 100px;
    text-align: center;
    width: 100%;
    padding: 0;
    margin: 0;
    background-color: #dadada;
    padding: 0.2rem 0;
    border-bottom: 1px solid silver;
  }
  .ingredient-column {
    font-size: 1.2rem;
    padding-left: 1rem;
  }
  .scale-wrapper {
    margin: 1rem 0;
    label {
      font-size: 1rem;
    }
    input {
      width: 5rem;
      padding: 0.5rem;
      font-family: "Josefin Sans", sans-serif;
      font-size: 1rem;
      letter-spacing: 0.1rem;
      outline: none;
      border: 1px solid #adadad;
      border-radius: 10px;
      //box-shadow: 0.2rem 0.2rem 1rem #c6c6c6;
      transition: background-color 0.3s;
      margin: 0 1rem;
    }
  }
`

const RecipeTable = ({ ingredients }) => {
  const [scale, setScaleNumber] = useState(1)

  return (
    <IngredientTableWrapper>
      <div className="scale-wrapper">
        <label htmlFor="scale">
          Scale Recipe:
          <input
            type="text"
            name="scale"
            placeholder="1"
            value={scale}
            onChange={val => {
              const number = parseFloat(val.currentTarget.value)
                ? parseFloat(val.currentTarget.value)
                : 0
              setScaleNumber(number)
            }}
          />
        </label>
      </div>

      <div className="ingredient-table-heading">
        <span className="ingredient-column">Amount</span>
        <span className="ingredient-column">Measurement</span>
        <span className="ingredient-column">Name</span>
      </div>
      {ingredients.map(ingredient => (
        <Ingredient {...ingredient} scale={scale} />
      ))}
    </IngredientTableWrapper>
  )
}

export default RecipeTable
