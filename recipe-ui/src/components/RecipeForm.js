import React from "react"
import { useMutation } from "@apollo/react-hooks"
import { Formik, Form, Field, FieldArray } from "formik"
import styled from "styled-components"
import { localConfig } from "../config"
import InputComponent from "./InputComponent"
import { CREATE_RECIPE_MUTATION } from "../mutations/createMutations"
import { CreateRecipeSchema } from "../validation/recipeValidationSchema"
import { FaPlusCircle } from "react-icons/fa"
import { Button } from "./styles/customStyleComponents"
import axios from "axios"

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
`
const IngredientWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
          const token = localStorage.getItem("token")
          const res = await fetch(`${localConfig.url}/upload`, {
            method: "POST",
            body: data,
            headers: {
              Authorization: token ? `Bearer ${token}` : "",
            },
          })
          console.log(res)
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
                          <Button
                            red
                            width="30px"
                            type="button"
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          >
                            -
                          </Button>
                          <Button
                            green
                            width="30px"
                            type="button"
                            onClick={() =>
                              arrayHelpers.push({
                                amount: "",
                                measurement: "",
                                name: "",
                              })
                            } // insert an empty string at a position
                          >
                            +
                          </Button>
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
                    <Button
                      primary
                      width="75%"
                      type="submit"
                      buttonPadding={[10]}
                      style={{ margin: "2rem auto" }}
                    >
                      Submit
                    </Button>
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
