import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

const navLink = ({ to, children }) => (
  <NavLink exact
    activeStyle={{activeStyle}}
    to={to}
  >
    {children}
  </NavLink>
)

const activeStyle = {
  color = 'green'
}

export default navLink;