import React from 'react'
import styled from 'styled-components'
import GithubLogo from '../static/img/github'

const Footer = () => (
  <Github>
    <a href="#">
      <GithubLogo />
    </a>
  </Github>
)

const Github = styled.div`
  text-align: center;
`

export default Footer;