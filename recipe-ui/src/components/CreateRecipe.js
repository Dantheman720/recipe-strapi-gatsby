import React from "react"
import { useMutation } from "@apollo/react-hooks"
import { Formik, Form, Field, FieldArray } from "formik"
import { Col, Row, Input, Button, Icon, Upload } from "antd"
import styled from "styled-components"
import gql from "graphql-tag"
import { localConfig } from "../config"
import * as Yup from "yup"
const { TextArea } = Input

const CREATE_RECIPE_MUTATION = gql`
  mutation CREATE_RECIPE_MUTATION(
    $description: String!
    $recipename: String!
    $ingredients: JSON!
    $slug: String!
    $excerpt: String!
  ) {
    createRecipe(
      input: {
        data: {
          recipename: $recipename
          excerpt: $excerpt
          description: $description
          ingredients: $ingredients
          slug: $slug
        }
      }
    ) {
      recipe {
        id
      }
    }
  }
`

const CreateRecipeSchema = Yup.object().shape({
  recipename: Yup.string().required("Required"),
  excerpt: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  ingredients: Yup.array().required("Required"),
})

const CreateRecipeFormWrapper = styled.div`
  input,
  textarea {
    margin: 10px 0;
  }

  label {
    font-weight: 700;
  }
`

const IngredientWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const IngredientTableWrapper = styled.div`
  input,
  button {
    margin: 10px 0;
  }
`

const CreateRecipeWrapper = styled.div`
  max-width: 75%;
  margin: auto;
`

const CreateRecipe = () => (
  <CreateRecipeWrapper>
    <RecipeForm />
    {/*<IngredientForm />*/}
  </CreateRecipeWrapper>
)
const InputComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <>
    <input type="text" {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </>
)

export default CreateRecipe

const RecipeForm = () => (
  <div>
    <Formik
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
      render={({ values, setFieldValue, errors, touched, handleChange }) => (
        <form>
          <pre>{JSON.stringify(values, undefined, 2)}</pre>
          <label>Recipe Name</label>
          <Field
            name="recipename"
            render={({ field /* { name, value, onChange, onBlur } */ }) => (
              <input
                {...field}
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
                {...field}
                onChange={e => {
                  const file = e.target.files[0]
                  setFieldValue("files", file)
                  console.log(e.target.files[0])
                }}
              />
            )}
          />
          <h2 style={{ textAlign: "center" }}>Ingredients</h2>
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
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.push("")} // insert an empty string at a position
                      >
                        +
                      </button>
                    </IngredientTableWrapper>
                  ))
                ) : (
                  <IngredientWrapper>
                    <Icon
                      type="plus-circle"
                      style={{
                        fontSize: "42px",
                        color: "green",
                        margin: "auto",
                      }}
                      onClick={() => arrayHelpers.push("")}
                    />
                  </IngredientWrapper>
                )}
                <IngredientWrapper>
                  <button type="submit">Submit</button>
                </IngredientWrapper>
                {errors && Object.entries(touched).length > 0 && (
                  <div>Fill out the form!</div>
                )}
              </>
            )}
          />
        </form>
      )}
    />
  </div>
)
