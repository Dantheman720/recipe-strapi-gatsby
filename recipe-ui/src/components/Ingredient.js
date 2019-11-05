import React, { useContext, useState } from "react"
import styled from "styled-components"
import { IngredientsContext } from "../templates/recipe"
import { Button } from "./styles/customStyleComponents"

const IngredientWrapper = styled.div`
  .ingredient-table-item {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr) 200px;
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
    &.buttons {
      display: flex;
      flex-direction: row;
    }
  }
`
const updatedList = (
  iterable,
  ingredientId,
  ingredientAmount,
  ingredientMeasurement,
  ingredientName
) => {
  return iterable.map(item => {
    if (item.key !== ingredientId) return item
    return {
      key: ingredientId,
      amount: ingredientAmount,
      measurement: ingredientMeasurement,
      name: ingredientName,
    }
  })
}

const Ingredient = ({ amount, scale, measurement, ingredientId, name }) => {
  const [ingredientAmount, setIngredientAmount] = useState(amount * scale)
  const [ingredientName, setIngredientName] = useState(name)
  const [ingredientMeasurement, setIngredientMeasurement] = useState(
    measurement
  )
  const [isHidden, setIsHidden] = useState(true)
  const [isSetToRemove, setIsSetToRemove] = useState(false)
  const IngredientList = useContext(IngredientsContext)
  return (
    <IngredientWrapper>
      <div className="ingredient-table-item">
        <span
          className="ingredient-column-input"
          style={
            isSetToRemove === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
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
        <span
          className="ingredient-column-input"
          style={
            isSetToRemove === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
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
        <span
          className="ingredient-column-input"
          style={
            isSetToRemove === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
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
        <span className="ingredient-column-input buttons">
          <Button
            red
            buttonPadding={[3, 5]}
            className="remove-ingredient"
            onClick={() => {
              const updated = IngredientList.ingredients.filter(
                ({ key }) => key !== ingredientId
              )
              setIsSetToRemove(true)
              IngredientList.ingredients = updated
            }}
          >
            Remove
          </Button>
          <Button
            primary
            buttonPadding={[3, 5]}
            style={
              isHidden === true ? { display: "block" } : { display: "none" }
            }
            onClick={() => setIsHidden(false)}
          >
            Edit
          </Button>
          <Button
            primary
            buttonPadding={[3, 5]}
            style={
              isHidden === true ? { display: "none" } : { display: "block" }
            }
            onClick={() => {
              const updated = updatedList(
                IngredientList.ingredients,
                ingredientId,
                ingredientAmount,
                ingredientMeasurement,
                ingredientName
              )
              setIsHidden(true)
              IngredientList.ingredients = updated
            }}
          >
            Save
          </Button>
        </span>
      </div>
    </IngredientWrapper>
  )
}

export default Ingredient
