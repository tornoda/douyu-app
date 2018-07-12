import React from 'react'

const oneCategory = ({
  gameUrl,
  gameIcon,
  gameId,
  gameName,
  gameSrc,
  isPhoneSize
}) => (
  <li>
    <a href={gameUrl} isPhoneSize={isPhoneSize}>
      <img src={isPhoneSize ? gameIcon : gameSrc} alt={'shoucut-' + gameId}/>
    </a>
    <h1>
      {gameName}
    </h1>
  </li>
)

export default oneCategory