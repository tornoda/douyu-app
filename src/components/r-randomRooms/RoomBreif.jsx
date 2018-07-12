import React from 'react';
import styled from 'styled-components'
import { convertNumber } from '../../utility/numberDealer'

const RoomBreif = ({
  roomUrl,
  roomSrc,
  roomId,
  nickName,
  fansOnline,
  roomName
}) => (
  <Random>
    <a href={roomUrl}>
      <img src={roomSrc} alt={'room-cover' + roomId} />
    </a>
    <Name>
        <Nickname>
          {nickName}
        </Nickname>
        <Online>
          <i className="fa fa-eye">
          </i>
          &nbsp;{convertNumber(fansOnline)}
        </Online>
    </Name>
    <H1><a href={roomUrl}>{roomName}</a></H1>
  </Random>
)

const Random = styled.div`
  display: inline-block;
  width: 33.3%;
  box-sizing: border-box;
  padding: 10px;
  vertical-align: top;
  > a {
    display: block;
    width: 100%;
    overflow: hidden;
  }
  & img {
    width: 100%;
    border-radius: 5px;
    display: inline-block;
  }
  @media screen and (max-width: 600px) {
    width: 50%;
    padding: 5px;
  }
`;
const Name = styled.div`
  padding-top: 0.5em;
  overflow: hidden;
  }
  `;
const Nickname = styled.div`
  float: left;
  @media screen and (max-width: 600px) {
    float: none
  }
`
const Online = Nickname.extend`
  float: right;
  @media screen and (max-width: 600px) {
    font-size: 10px;
    float: none;
}
`
const H1 = styled.h1`
  margin: 0;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  font-size: 1.3em;
  > a {
    text-decoration: none;
    color: #000;
    &:hover {
      color: green;
    }
  }
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`
export default RoomBreif;
