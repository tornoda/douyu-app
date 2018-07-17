import React from 'react'
import styled from 'styled-components'
const oneCategory = ({
  game_url,
  game_icon,
  cate_id,
  game_name,
  game_src,
  isPhoneSize
}) => (
  <Category>
    <Img href={game_url} isPhoneSize={isPhoneSize}>
      <img src={isPhoneSize ? game_icon : game_src} alt={'shoucut-' + cate_id}/>
    </Img>
    <H1>
      {game_name}
    </H1>
  </Category>
)

const Category = styled.li`
  display: inline-block;
  box-sizing: border-box;
  width: 25%;
  padding: 10px;
  list-style: none;
  vertical-align: top;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`
const Img = styled.a`
  display: inline-block;
  border-radius: ${props => props.isPhoneSize ? '50%' : '10px'};
  font-size: 0;
  overflow: hidden;
  & > img {
    width: 100%;
  }
`
const H1 = styled.h1`
  text-align: center;
  font-size: 18px;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`

export default oneCategory