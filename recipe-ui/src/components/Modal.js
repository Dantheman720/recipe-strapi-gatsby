import React from "react"
import styled from "styled-components"
import axios from "axios"
import { Formik } from "formik"

const ModalWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
  margin: auto;
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;

  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer;
  color: black;
  .modal-info {
    grid-column: 3;
    display: flex;
    margin: auto;
    flex-direction: column;
    background-color: #fff;
    height: 75%;
    width: 100%;
    span {
      color: black;
      padding: 0 1rem;
    }
    .close {
      display: flex;
      justify-content: end;
    }
  }
  .login-form-heading {
    text-align: center;
    padding: 0;
    margin: 0;
  }
  .modal-form {
    form {
      display: flex;
      flex-direction: column;
      label {
        margin: 0 1rem;
        font-weight: 600;
      }
      input {
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
      }
      .login-button {
        display: inline-block;
        text-align: center;
        color: #fff;
        font-weight: bold;
        box-shadow: var(--elevation-1);
        font-size: var(--baseFontSize);
        font-family: var(--headingFont);
        padding: 8px 40px;
        transition: background 0.3s ease 0s, box-shadow 0s ease 0s,
          transform 0s ease 0s;
        width: 200px;
        border-radius: 5px;
        background-color: #007bff;
        border: 1px solid #007bff;
        margin: 2rem auto;
        &:hover {
          cursor: pointer;
          background-color: #0062cc;
          border: 1px solid #005cbf;
        }
      }
    }
  }
`
const Modal = ({ hide, username }) => {
  return (
    <ModalWrapper>
      <div className="modal-info">
        <div className="close" onClick={hide}>
          <span>X</span>
        </div>
        <div className="modal-form">
          <h1 className="login-form-heading">Login</h1>

          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                axios
                  .post("http://localhost:1337/auth/local", {
                    identifier: values.username,
                    password: values.password,
                  })
                  .then(response => {
                    // Handle success.
                    localStorage.setItem("token", response.data.jwt)
                    localStorage.setItem(
                      "username",
                      response.data.user.username
                    )
                    username(response.data.user.username)
                  })
                  .catch(error => {
                    // Handle error.
                    console.log("An error occurred:", error)
                  })

                actions.setSubmitting(false)
              }, 1000)
            }}
            render={props => (
              <form onSubmit={props.handleSubmit}>
                <label htmlFor="username">Email:</label>
                <input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.username}
                  name="username"
                />
                {props.errors.username && (
                  <div id="feedback">{props.errors.username}</div>
                )}
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.password}
                  name="password"
                />
                {props.errors.password && (
                  <div id="feedback">{props.errors.password}</div>
                )}
                <button type="submit" className="login-button">
                  Login
                </button>
              </form>
            )}
          />
        </div>
      </div>
    </ModalWrapper>
  )
}

export default Modal
