/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Layout as AntLayout, Menu } from "antd"
import "./layout.css"
import { Link } from "gatsby"

const { Header, Footer, Content } = AntLayout

const Layout = ({ children }) => {
  const location = window.location.pathname

  return (
    <AntLayout className="layout">
      <Header style={{ textAlign: "center" }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[location]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="/" style={{ margin: "0 50px" }}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/recipes" style={{ margin: "0 50px" }}>
            <Link to="/recipe-search">Recipes</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Created by Dan Coughlin</Footer>
    </AntLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
