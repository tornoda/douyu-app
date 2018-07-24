import React from 'react'
import styled from 'styled-components'

const NextPage = ({ getNextPage, children }) => (
  <H1 onMouseDown={getNextPage} onTap={getNextPage}>
    {children}
  </H1>
)

const H1 = styled.h1`
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
  &:hover {
    color: red;
  }
`
export default NextPage