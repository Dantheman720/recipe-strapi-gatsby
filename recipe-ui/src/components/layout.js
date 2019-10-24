/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import "./layout.css"
import PropTypes from "prop-types"

import { Link } from "gatsby"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"

const theme = {
  turqoise: "#22a39f",
  headingSize: "3rem",
  white: "#f5f5f5",
  brightWhite: "#ffffff",
  greyBorder: "#707070",
  greyBoxShadow: "#777",
  charcoalMainColor: "#222222",
  borderStyleMain: "1px solid #707070",
  maxWidth: "1280px",
  minWidth: "586px",
}

const GlobalStyles = createGlobalStyle`
    @import url('http://font.googleapis.com/css?family=open+sans');
    
    body{
        font-family: 'Open Sans', sans-seriff;
        width: 100%;
        margin: 0;
        font-size: 10px;
        scroll-behavior: smooth;

    }
`

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`

const Layout = ({ children }) => {
  const [userNameInfo, setUserNameInfo] = React.useState("")
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
