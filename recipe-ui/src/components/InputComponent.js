import React from "react"
import styled from "styled-components"

const InputComponentWrapper = styled.div``

const InputComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <>
    <input
      type="text"
      className="ingredient-field-items"
      {...field}
      {...props}
    />
    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </>
)
export default InputComponent
