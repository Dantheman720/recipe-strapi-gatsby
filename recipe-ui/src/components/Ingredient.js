import React, { useState } from "react"
import styled from "styled-components"

const IngredientWrapper = styled.div`
  .ingredient-table-item {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr) 100px;
    width: 100%;
    padding: 0;
    margin: 0;
    padding: 0.2rem 0;
    border-bottom: 1px solid silver;
    text-align: center;
    &:hover {
      background-color: rgba(237, 237, 237, 0.4);
    }
  }
  .ingredient-column-input {
    font-size: 1rem;
    padding: 0.5rem 0 0.5rem 1rem;
  }
  
  button {
        display: block;
        border: 1px solid rgb(28,184,65);
        color: #fff;
          background-color: rgb(28,184,65);
        //padding: 1rem 2rem;
        text-decoration: none;
        font-family: sans-serif;
        font-size: 1rem;
        cursor: pointer;
        text-align: center;
        transition: background 250ms ease-in-out, transform 150ms ease;
        -webkit-appearance: none;
        -moz-appearance: none;
        //width: 125px;
        border-radius: 5px;
        &:hover {
          background-color: rgb(21,131,50);
          color: #fff;

  }
`

const Ingredient = ({ amount, scale, measurement, name }) => {
  const [ingredientAmount, setIngredientAmount] = useState(amount * scale)
  const [ingredientName, setIngredientName] = useState(name)
  const [ingredientMeasurement, setIngredientMeasurement] = useState(
    measurement
  )
  const [isHidden, setIsHidden] = useState(true)
  return (
    <IngredientWrapper>
      <div className="ingredient-table-item">
        <span className="ingredient-column-input">
          {isHidden && ingredientAmount * scale}
          <input
            style={
              isHidden === true ? { display: "none" } : { display: "block" }
            }
            type="text"
            value={ingredientAmount}
            onChange={e => setIngredientAmount(e.target.value)}
          />
        </span>
        <span className="ingredient-column-input">
          {isHidden && ingredientMeasurement}
          <input
            style={
              isHidden === true ? { display: "none" } : { display: "block" }
            }
            type="text"
            value={ingredientMeasurement}
            onChange={e => setIngredientMeasurement(e.target.value)}
          />
        </span>
        <span className="ingredient-column-input">
          {isHidden && ingredientName}
          <input
            style={
              isHidden === true ? { display: "none" } : { display: "block" }
            }
            type="text"
            value={ingredientName}
            onChange={e => setIngredientName(e.target.value)}
          />
        </span>
        <span className="ingredient-column-input">
          <button onClick={() => setIsHidden(!isHidden)}>Edit</button>
        </span>
      </div>
    </IngredientWrapper>
  )
}

export default Ingredient
