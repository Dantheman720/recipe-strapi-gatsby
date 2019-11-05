import styled from "styled-components"

const styleSpaced = (styleArgs, unit) =>
  styleArgs.map(item => `${item}${unit}`).join(" ")

export const Button = styled.button`
  display: block;
  text-decoration: none;
  font-family: sans-serif;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 5px;
  background-color: transparent;
  border: none;

  ${props =>
    props.fontSize ? `font-size: ${props.fontSize}rem` : `font-size: 1rem`};
  ${props =>
    props.buttonMargin
      ? `margin: ${styleSpaced(props.buttonMargin, "rem")}`
      : `margin: auto`};
  ${props =>
    props.buttonPadding
      ? `padding: ${styleSpaced(props.buttonPadding, "px")}`
      : `padding: 0`};
  ${props =>
    props.primary &&
    `
      color: #fff;
      background-color: #5bc0de;
      border: 1px solid #46b8da;
      &:hover {
        background-color: #31b0d5;
        border: 1px solid #269abc;
        color: #fff;
      }
    `}
  ${props =>
    props.green &&
    `
  border: 1px solid rgb(28, 184, 65);
  color: #fff;
    background-color: rgb(28, 184, 65);
  &:hover {
    background-color: rgb(21, 131, 50);
    color: #fff;
  }

    `}
  ${props =>
    props.red &&
    `
      color: #fff;
      background-color: #d9534f;
      border: 1px solid #d43f3a;
      &:hover {
        background-color: #c9302c;
        border: 1px solid #ac2925;
      }

    `}
  ${props =>
    props.tableFormat &&
    `
    border-radius: 5px;
    margin: auto;
    font-size: 1rem;

    `}
`

export const Input = styled.input`
  background-color: transparent;
  border-color: inherit;
  border-image: initial;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  box-shadow: none;
  box-sizing: border-box;
  font: inherit;
  margin: 1rem;
  max-width: 100%;
  padding: 10px;
  transition: border-color 0.2s ease 0s;
`
