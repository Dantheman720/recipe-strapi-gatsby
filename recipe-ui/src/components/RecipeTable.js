import React from "react"
import styled from "styled-components"

const IngredientTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75%;
  margin: 0 auto;
  .ingredient-table-heading {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
  .ingredient-table-item {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    padding: 0;
    margin: 0;
    padding: 0.2rem 0;
    border-bottom: 1px solid silver;
    &:hover {
      background-color: green;
    }
  }
  .ingredient-column-input {
    font-size: 1rem;
    padding: 0.5rem 0 0.5rem 1rem;
  }
`

const RecipeTable = props => (
  <>
    <IngredientTableWrapper>
      <div className="ingredient-table-heading">
        <span className="ingredient-column">Amount</span>
        <span className="ingredient-column">Measurement</span>
        <span className="ingredient-column">Name</span>
      </div>
      <IngredientItem onClick={console.log("Clicked!")} />
      <IngredientItem />
    </IngredientTableWrapper>
  </>
)

const IngredientItem = () => (
  <div className="ingredient-table-item">
    <span className="ingredient-column-input">1</span>
    <span className="ingredient-column-input">count</span>
    <span className="ingredient-column-input">Red Onion</span>
  </div>
)

export default RecipeTable
