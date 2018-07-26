import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const RouterLink = ({ path, children }) => {
  return (
    <StyledNavLink
      to={path}
      exact={path === '/' ? true : false}
      activeStyle={activeStyle}
    >
      {children}
    </StyledNavLink>
  )
}

const activeStyle = {
  color: 'green'
}

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  border-bottom: 1px solid white;
  padding-bottom: 1px;
  margin-right: 1em;
  color: black;
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`

export default RouterLink