import React from "react"
import { useMutation } from "@apollo/react-hooks"
import { Formik, Form, Field, FieldArray } from "formik"
import { Col, Row, Input, Button, Icon } from "antd"
import styled from "styled-components"
import gql from "graphql-tag"

const { TextArea } = Input

const CREATE_RECIPE_MUTATION = gql`
  mutation CREATE_RECIPE_MUTATION(
    $description: String
    $recipename: String
    $ingredients: JSON
    $slug: String
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
        recipename
      }
    }
  }
`

const AddRecipe = async values => {
  // let recipename, excerpt, description
  //
  // return <div>Hello</div>
}

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

const IngredientForm = () => {
  const [createRecipe] = useMutation(CREATE_RECIPE_MUTATION)

  return (
    <div>
      <Formik
        onSubmit={async e => {
          const slug = e.recipename.replace(/\s+/g, "-").toLowerCase()

          e.slug = slug
          const thing = await createRecipe({ variables: e })
          console.log(thing)
        }}
        render={({ values }) => (
          <Form>
            <CreateRecipeFormWrapper>
              <label>Recipe Name</label>
              <Field
                name="recipename"
                render={({ field /* { name, value, onChange, onBlur } */ }) => (
                  <Input
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
                  <Input
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
                  <TextArea
                    {...field}
                    type="text"
                    autosize={{ minRows: 10, maxRows: 20 }}
                    placeholder="Eggs, bacon and toast. Eggs, bacon and toast. Why don’t you start your day the Girgich way with eggs, bacon and…"
                  />
                )}
              />
            </CreateRecipeFormWrapper>
            <h2 style={{ textAlign: "center" }}>Ingredients</h2>
            <FieldArray
              name="ingredients"
              render={arrayHelpers => (
                <>
                  {values.ingredients && values.ingredients.length > 0 ? (
                    values.ingredients.map((ingredient, index) => (
                      <Row key={index}>
                        <IngredientTableWrapper>
                          <Col offset={5} span={24} style={{ display: "flex" }}>
                            <Field
                              name={`ingredients.${index}.name`}
                              component={InputComponent}
                              placeholder="1"
                              span={3}
                            />
                            <Field
                              name={`ingredients.${index}.amount`}
                              component={InputComponent}
                              placeholder="tbsp"
                              span={4}
                            />
                            <Field
                              name={`ingredients.${index}.measurement`}
                              component={InputComponent}
                              placeholder="Powdered Eggs"
                              span={6}
                            />
                            <Button
                              type="primary"
                              shape="circle"
                              style={{
                                background: "red",
                                border: "none",
                                marginLeft: "5px",
                                marginRight: "5px",
                              }}
                              onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                            >
                              -
                            </Button>
                            <Button
                              type="primary"
                              shape="circle"
                              style={{ background: "green", border: "none" }}
                              onClick={() => arrayHelpers.push("")} // insert an empty string at a position
                            >
                              +
                            </Button>
                          </Col>
                        </IngredientTableWrapper>
                      </Row>
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
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ margin: "10px auto", width: "25%" }}
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
    </div>
  )
}

const CreateRecipe = () => (
  <Row>
    <Col span={8} offset={8}>
      <IngredientForm />
    </Col>
  </Row>
)
const InputComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <>
    <Col {...props}>
      <Input type="text" {...field} {...props} />
    </Col>
    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </>
)

export default CreateRecipe
