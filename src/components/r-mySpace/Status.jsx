import React, { Component } from 'react'
import styled from 'styled-components'
import { convertNumber } from '../../utility/numberDealer'

const Status = ({
  avatar,
  room_id,
  owner_name,
  room_status,
  start_time,
  online,
  fans_num
}) => (
    <StatusInfo>
      <OwnerPhoto src={avatar} alt={`zhubo-portrait${room_id}`} />
      <Popularity>
        <div>
          <span>
            {owner_name}
          </span>
          <span className="fa fa-gift" style={giftButtom}></span>
        </div>
        {
          room_status === 1 ?
            (<div>直播中...</div>) :
            (<div>{'上次开播时间：' + start_time}</div>)
        }
        <div><span>人气：</span>{convertNumber(online) + '（在线）/' + convertNumber(fans_num) + '（总共）'}</div>
      </Popularity>
    </StatusInfo>
  )

const StatusInfo = styled.div`
  width: 100%;
  padding: 13px 10px;
  overflow: hidden;
  /* @media screen and (max-width: 600px) {
    height: 88px;
  } */
`
const OwnerPhoto = styled.img`
  height: 75px;
  width: 75px;
  max-width: 75px;
  border-radius: 50%;
  float: left;
  @media screen and (max-width: 600px) {
    height: 60px;
    width: 60px;
  }

`
const Popularity = styled.div`
  padding-left: 10px;
  float: left;
  height: 50px;
  line-height: 2;
  width: 75%;
  @media screen and (max-width: 600px) {
    padding-left: 10px;
    line-height: 1.7;
    font-size: 12px;
  }
`
const giftButtom = {
  fontSize: '18px',
  color: '#CC3333',
  display: 'inline-block',
  marginLeft: '12px'

}

export default Status