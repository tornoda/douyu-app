import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const RouterLink = ({ path, children }) => {
  return (
    <StyledNavLink to={path} activeStyle={activeStyle}>
      {children}
    </StyledNavLink>
  )
}

const activeStyle = {
  color: 'green'
}

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  margin-right: 1em;
  color: red;
  & > a {
    text-decoration: none;
    color: black;
    &:hover {
      border-bottom: 1px solid;
      padding-bottom: 1px;
    }
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`

export default RouterLink