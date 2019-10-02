import React from "react"
import { useMutation } from "@apollo/react-hooks"
import { Formik, Form, Field, FieldArray } from "formik"
import { Col, Row, Input, Button } from "antd"
import gql from "graphql-tag"

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

function AddRecipe() {
  let recipename, excerpt, description
  const [createRecipe, { data }] = useMutation(CREATE_RECIPE_MUTATION)

  return <div>Hello</div>
}

const IngredientForm = () => (
  <div>
    <Formik
      onSubmit={values =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
        }, 500)
      }
      render={({ values }) => (
        <Form>
          <h2>Ingredients</h2>
          <FieldArray
            name="ingredients"
            render={arrayHelpers => (
              <div>
                {values.ingredients && values.ingredients.length > 0 ? (
                  values.ingredients.map((ingredient, index) => (
                    <Row key={index}>
                      <Col offset={5} span={24}>
                        <div key={index}>
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
                              margin: "0 5px",
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
                        </div>
                      </Col>
                    </Row>
                  ))
                ) : (
                  <Button type="primary" onClick={() => arrayHelpers.push("")}>
                    {/* show this when user has removed all ingredients from the list */}
                    Add an Ingredient
                  </Button>
                )}
                <div>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ margin: "10px 0" }}
                  >
                    Submit
                  </Button>
                </div>
                <pre>{JSON.stringify(arrayHelpers, undefined, 2)}</pre>
              </div>
            )}
          />
        </Form>
      )}
    />
  </div>
)

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
  <div>
    <Col {...props}>
      <Input type="text" {...field} {...props} />
    </Col>
    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </div>
)

export default CreateRecipe
