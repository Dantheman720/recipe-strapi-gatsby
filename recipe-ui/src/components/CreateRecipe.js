import React from "react"
import { useMutation } from "@apollo/react-hooks"
import { Formik, Form, Field, FieldArray } from "formik"
import styled from "styled-components"
import gql from "graphql-tag"
import { localConfig } from "../config"
import * as Yup from "yup"
import InputComponent from "./InputComponent"
import RecipeForm from "./RecipeForm"

const CreateRecipeWrapper = styled.div`
  max-width: 75%;
  margin: auto;
`

const CreateRecipe = () => (
  <CreateRecipeWrapper>
    <RecipeForm />
  </CreateRecipeWrapper>
)

export default CreateRecipe
