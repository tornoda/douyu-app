import React, { Component } from 'react'
import styled from 'styled-components'
// import RoomBrief from '../../components/r-randomRooms/RoomBreif';
// import NextPage from '../../components/r-randomRooms/NextPage';
import { RoomBrief, NextPage } from '../../components'
import { fetchRandom } from '../../actions/fetchRandom';
import { connect } from 'react-redux'
import { REQUEST_BEGIN } from '../../actions/fetch3Step'
import {
  increasePage,
  changeFirstTime
} from '../../actions/didRandomPage'

class RandomRooms extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { getPage, isFirstLoad } = this.props
    if (isFirstLoad === 1) getPage()
  }

  render() {
    const { rooms, page, getPage, increasePage, fetchStatus } = this.props
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
        <NextPage getNextPage={
          ((page) => {
            increasePage()
            getPage(page)
          }).bind(null, page)
        }>
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
  const {
    random: {
      infoFetched: {
        fetchStatus,
        rooms
      },
      page: page,
      isFirstLoad: isFirstLoad
    }
  } = state
  return {
    fetchStatus,
    rooms,
    page,
    isFirstLoad
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPage: (page = 0) => {
    dispatch(fetchRandom(page))
    dispatch(changeFirstTime)
  },
  increasePage: () => {
    dispatch(increasePage)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomRooms);