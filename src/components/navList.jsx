import React from 'react';
import styled from 'styled-components';
import navLink from './navLink';

const navList = ({ requestCategories }) => (
  <div>
    <NavLink to='/'>随便看看</NavLink>
    <NavLink to='/showCategory' onTap={() => requestCategories} onClick={requestCategories}>全部分类</NavLink>
    <NavLink to='/personalCards'>我的关注</NavLink>
  </div>
)

const NavLink = styled(navLink)`
  display: inline-block;
  margin-right: 1em;
  color: red;  
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`
export default navList;