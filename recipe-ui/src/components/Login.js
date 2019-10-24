import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import Modal from "./Modal"

const LoginWrapper = styled.div``
const Login = () => {
  const userNameInfo = localStorage.getItem("username")
    ? localStorage.getItem("username")
    : ""
  const [userName, setUserName] = useState(userNameInfo)

  return (
    <LoginWrapper>
      <span>
        {userName ? (
          `Hello, ${userName}`
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
