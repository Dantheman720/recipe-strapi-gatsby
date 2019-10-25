import React, { useState } from "react"
import styled from "styled-components"
import Modal from "./Modal"

const LoginWrapper = styled.div`
  .logged-in {
    display: flex;
    flex-direction: row;
  }
  button {
    display: block;
    text-align: center;
    color: #fff;
    box-shadow: var(--elevation-1);
    font-size: var(--baseFontSize);
    font-family: var(--headingFont);
    font-size: 0.9rem;
    transition: background 0.3s ease 0s, box-shadow 0s ease 0s,
      transform 0s ease 0s;
    border-radius: 5px;
    background-color: #007bff;
    border: 1px solid #007bff;
    margin: 0 1rem;
    &:hover {
      cursor: pointer;
      background-color: #0062cc;
      border: 1px solid #005cbf;
    }
  }
`
const Login = () => {
  const userNameInfo = localStorage.getItem("username")
    ? localStorage.getItem("username")
    : ""
  const [userName, setUserName] = useState(userNameInfo)

  return (
    <LoginWrapper>
      <span>
        {userName ? (
          <span className="logged-in">
            {`Hello, ${userName}`}
            <button
              onClick={() => {
                setUserName("")
                localStorage.setItem("username", "")
                localStorage.setItem("token", "")
              }}
            >
              Logout
            </button>
          </span>
        ) : (
          <ToggleContent
            className="login-bar"
            toggle={show => <span onClick={show}>Login</span>}
            content={hide => <Modal hide={hide} username={setUserName} />}
          ></ToggleContent>
        )}
      </span>
    </LoginWrapper>
  )
}

export const ToggleContent = ({ toggle, content }) => {
  const [isShown, setIsShown] = useState(false)
  const hide = () => setIsShown(false)
  const show = () => setIsShown(true)

  return (
    <>
      {toggle(show)}
      {isShown && content(hide)}
    </>
  )
}

export default Login
