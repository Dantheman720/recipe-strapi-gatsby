/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
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

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <LayoutWrapper>{children}</LayoutWrapper>
    </ThemeProvider>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
// const Layout = ({ children }) => {
//   const location = window.location.pathname
//
//   return (
//     <AntLayout className="layout">
//       <Header style={{ textAlign: "center" }}>
//         <div className="logo" />
//         <Menu
//           theme="dark"
//           mode="horizontal"
//           defaultSelectedKeys={[location]}
//           style={{ lineHeight: "64px" }}
//         >
//           <Menu.Item key="/" style={{ margin: "0 50px" }}>
//             <Link to="/">Home</Link>
//           </Menu.Item>
//           <Menu.Item key="/recipes" style={{ margin: "0 50px" }}>
//             <Link to="/recipe-search">Recipes</Link>
//           </Menu.Item>
//         </Menu>
//       </Header>
//       <Content style={{ padding: "0 50px" }}>
//         <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
//           {children}
//         </div>
//       </Content>
//       <Footer style={{ textAlign: "center" }}>Created by Dan Coughlin</Footer>
//     </AntLayout>
//   )
// }
//
// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
