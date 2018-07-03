import React from 'react';
import '../static/css/AllCategory.css';
import styled from 'styled-components';

const Category = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 25%;
  padding: 10px;
`
const Img = styled.a`
  display: inline-block;
  border-radius: 10px;
  font-size: 0;
  overflow: hidden;
  & > img {
    width: 100%;
  }
`
const H1 = styled.h1`
  text-align: center;
  font-size: 18px;
`

function AllCategory (props) {
  return (
    <Category>
      <Img href={props.gameUrl}>
        <img src={props.gameSrc} alt={'shortcut' + props.gameId}/>
      </Img>
      <H1>{props.gameName}</H1>
    </Category>
  ) 
}

export default AllCategory;