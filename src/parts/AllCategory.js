import React from 'react';
import styled from 'styled-components';


const AllCategory = ({ location }) => (
  <div id="all-category">
    {
      location.state.category.map(function (game, idx) {
        return (
          <Category key={idx}>
            <Img href={game.gameUrl} phoneSize={location.state.phoneSize}>
              <img src={location.state.phoneSize ? game.gameIcon : game.gameSrc} alt={'shortcut' + game.gameId} />
            </Img>
            <H1>{game.gameName}</H1>
          </Category>
        )
      })
    }
  </div>
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
  border-radius: ${props => props.phoneSize ? '50%' : '10px'};
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
export default AllCategory;