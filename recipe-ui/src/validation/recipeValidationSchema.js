import * as Yup from "yup"

export const CreateRecipeSchema = Yup.object().shape({
  recipename: Yup.string().required("Required"),
  excerpt: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  ingredients: Yup.array().required("Required"),
})
