import React, { Component } from 'react'
import styled from 'styled-components'
// import RoomBrief from '../../components/r-randomRooms/RoomBreif';
// import NextPage from '../../components/r-randomRooms/NextPage';
import { RoomBrief, NextPage } from '../../components'
import { fetchRandom } from '../../actions/fetchRandom';
import { connect } from 'react-redux'
import { REQUEST_BEGIN } from '../../actions/fetch3Step'

class RandomRooms extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    const { getPage } = this.props
    getPage()
  }
  
  render() {
    const { rooms, page, getPage, fetchStatus } = this.props
    return (
      <div>
        {
          rooms.map((val, idx) => (
            <RoomBrief 
              key={idx} 
              roomUrl={val.url}
              roomSrc={val.room_src}
              roomId={val.room_id}
              nickName={val.nickname}
              fansOnline={val.online}
              roomName={val.room_name}
            />
          ))
        }
        <NextPage getNextPage={((page) => getPage(page)).bind(null, page)}>
          {
            fetchStatus === REQUEST_BEGIN ? '加载中...' : '点击加载'
          }
        </NextPage>
      </div>
    )
  }
}

RandomRooms.defaultProps = {
  rooms: [],
  page: 0,
  getPage: null,
  fetchStatus: null
}

const mapStateToProps = (state) => {
  const { random } = state
  return random
}

const mapDispatchToProps = (dispatch) => ({
    getPage: (page = 0) => { dispatch(fetchRandom(page)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomRooms);