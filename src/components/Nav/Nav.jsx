import React from 'react'
import RouterLink from './RouterLink'
import styled from 'styled-components'

export const CATEGORIES = '/Categories'
export const MYSPACE = '/Myspace'

const navList = [
  {
    name: '随便看看',
    path: ''
  },
  {
    name: '分类',
    path: CATEGORIES
  },
  {
    name: '我的',
    path: MYSPACE
  }
]

const Nav = () => {
  return (
    <Ul>
      {
        navList.map((val, idx) => (
          <RouterLink key={idx} path={val.path}>
            {val.name}
          </RouterLink>
        ))
      }
    </Ul>
  )
}

const Ul = styled.ul`
  padding-left: 40px;
  @media screen and (max-width: 600px) {
    padding-left: 20px;
  }
`
export default Nav