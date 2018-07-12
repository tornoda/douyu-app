import React from 'react';
import Logo from '../../static/img/logo.png';
import styled from 'styled-components';


const Header = () => (
  <StyledHeader>
    <img src={ Logo } alt="douyu-logo" />
  </StyledHeader>
);

const StyledHeader = styled.header`
  display: inline-block;
  width: 150px;
  transition: all 0.5s;
  @media screen and (max-width: 600px) {
    width: 65px;
  }
  & > img {
    width: 100%;
  }
`

export default Header;