import React, { Component } from 'react';
import styled from 'styled-components';


const Nav = ({ key, url, keywords }) => {
  <NavList key={key}>
    <a href={url}>
      {keywords}
    </a>
  </NavList>
}

const NavList = styled.li`
  display: inline-block;
  color: red;
`;

export default Nav;