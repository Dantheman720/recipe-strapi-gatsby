import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Login from "./Login"

const HeaderWrapper = styled.div`
  grid-column: 1 / -1;
  background-color: ${props => props.theme.charcoalMainColor};
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  .header-center {
    grid-column: 2;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
  }
  height: 50px;
  font-size: 1.6rem;
  span {
    color: #fff;
    cursor: pointer;
  }
`

const Header = () => (
  <HeaderWrapper>
    <div className="header-center">
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/create-recipe">
        <span>Create</span>
      </Link>
      <Link to="/recipe-search">
        <span>Search</span>
      </Link>
      <Login />
    </div>
  </HeaderWrapper>
)
export default Header
