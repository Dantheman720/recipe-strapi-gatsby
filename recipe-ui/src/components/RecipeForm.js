import React from "react"
import { useMutation } from "@apollo/react-hooks"
import { Formik, Form, Field, FieldArray } from "formik"
import styled from "styled-components"
import { localConfig } from "../config"
import InputComponent from "./InputComponent"
import { CREATE_RECIPE_MUTATION } from "../mutations/createMutations"
import { CreateRecipeSchema } from "../validation/recipeValidationSchema"
import { FaPlusCircle } from "react-icons/fa"

const RecipeFormWrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }
  textarea {
    height: 15rem;
    resize: none;
  }

  label {
    font-size: 1rem;
    font-weight: 700;
  }
  .recipe-inputs,
  .ingredient-field-items {
    padding: 10px;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    outline: none;
    border: 1px solid #adadad;
    border-radius: 5px;
    transition: background-color 0.3s;
    margin: 0 5px;
  }
`
const IngredientTableWrapper = styled.div`
  display: grid;
  grid-template-columns: 50px 100px 1fr 75px;
  margin: 5px auto;
  .modify-ingredient-button {
    display: flex;
    flex-direction: row;
  }
  button {
    display: block;
    color: #fff;
    text-decoration: none;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 10px;
    margin: auto;
    width: 30px;
    &.remove-ingredient-row {
      background-color: #d9534f;
      border: 1px solid #d43f3a;
      &:hover {
        background-color: #c9302c;
        border: 1px solid #ac2925;
      }
    }
    &.add-ingredient-row {
      background-color: rgb(28, 184, 65);
      border: 1px solid rgb(28, 184, 65);
      &:hover {
        background-color: rgb(21, 131, 50);
        border: 1px solid rgb(21, 131, 50);
      }
    }
  }
`
const IngredientWrapper = styled.div`
  display: flex;
  flex-direction: column;
  button {
    display: block;
    color: #fff;
    text-decoration: none;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 5px;
    padding: 10px;
    margin: auto;
    width: 75%;
    background-color: #007bff;
    border: 1px solid #007bff;
    margin: 2rem auto;
    &:hover {
      background-color: #0062cc;
      border: 1px solid #005cbf;
    }
  }
`

const RecipeForm = () => {
  const [createRecipe] = useMutation(CREATE_RECIPE_MUTATION)

  return (
    <RecipeFormWrapper>
      <Formik
        validationSchema={CreateRecipeSchema}
        initialValues={{
          recipename: "",
          excerpt: "",
          description: "",
          picture: undefined,
          ingredients: [{ amount: "", measurement: "", name: "" }],
        }}
        onSubmit={async e => {
          const slug = e.recipename.replace(/\s+/g, "-").toLowerCase()
          e.slug = slug
          const recipe = await createRecipe({ variables: e })
          const recipeId = recipe.data.createRecipe.recipe.id

          const data = new FormData()
          data.append("files", e.files)
          data.append("ref", "recipe")
          data.append("refId", recipeId)
          data.append("field", "picture")

          const res = await fetch(`${localConfig.url}/upload`, {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "image/*",
            },
            body: data,
          })
        }}
        render={({ values, setFieldValue, errors, touched, handleChange }) => (
          <Form>
            <label>Recipe Name</label>
            <Field
              name="recipename"
              render={({ field /* { name, value, onChange, onBlur } */ }) => (
                <input
                  {...field}
                  className="recipe-inputs"
                  type="text"
                  placeholder="Eggs, bacon and toast!"
                />
              )}
            />
            <label>Excerpt</label>

            <Field
              name="excerpt"
              render={({ field /* { name, value, onChange, onBlur } */ }) => (
                <input
                  {...field}
                  className="recipe-inputs"
                  type="text"
                  placeholder="Why don't you start your day the Gergich way...."
                />
              )}
            />
            <label>Description</label>

            <Field
              name="description"
              render={({ field /* { name, value, onChange, onBlur } */ }) => (
                <textarea
                  {...field}
                  type="text"
                  className="recipe-inputs"
                  autosize={{ minRows: 10, maxRows: 20 }}
                  placeholder="Eggs, bacon and toast. Eggs, bacon and toast. Why don’t you start your day the Girgich way with eggs, bacon and…"
                />
              )}
            />
            <label>Image</label>

            <Field
              name="picture"
              render={({ field /* { name, value, onChange, onBlur } */ }) => (
                <input
                  type="file"
                  className="recipe-inputs"
                  {...field}
                  onChange={e => {
                    const file = e.target.files[0]
                    setFieldValue("files", file)
                  }}
                />
              )}
            />
            <h2 style={{ textAlign: "center", margin: "1rem 0" }}>
              Ingredients
            </h2>
            <FieldArray
              name="ingredients"
              render={arrayHelpers => (
                <>
                  {values.ingredients && values.ingredients.length > 0 ? (
                    values.ingredients.map((ingredient, index) => (
                      <IngredientTableWrapper key={index}>
                        <Field
                          name={`ingredients.${index}.amount`}
                          component={InputComponent}
                          placeholder="1"
                        />
                        <Field
                          name={`ingredients.${index}.measurement`}
                          component={InputComponent}
                          placeholder="tbsp"
                        />
                        <Field
                          name={`ingredients.${index}.name`}
                          component={InputComponent}
                          placeholder="Powdered Eggs"
                        />
                        <div className="modify-ingredient-button">
                          <button
                            type="button"
                            className="remove-ingredient-row"
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          >
                            -
                          </button>
                          <button
                            type="button"
                            className="add-ingredient-row"
                            onClick={() =>
                              arrayHelpers.push({
                                amount: "",
                                measurement: "",
                                name: "",
                              })
                            } // insert an empty string at a position
                          >
                            +
                          </button>
                        </div>
                      </IngredientTableWrapper>
                    ))
                  ) : (
                    <IngredientWrapper>
                      <span
                        type="plus-circle"
                        style={{
                          fontSize: "42px",
                          color: "rgb(28, 184, 65)",
                          margin: "auto",
                          cursor: "pointer",
                        }}
                        onClick={() => arrayHelpers.push("")}
                      >
                        <FaPlusCircle />
                      </span>
                    </IngredientWrapper>
                  )}
                  <IngredientWrapper>
                    <button type="submit">Submit</button>
                  </IngredientWrapper>
                </>
              )}
            />
          </Form>
        )}
      />
    </RecipeFormWrapper>
  )
}

export default RecipeForm
