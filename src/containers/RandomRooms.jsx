import React, { Component } from 'react'
import styled from 'styled-components'
import RoomBrief from '../components/RoomBreif';
import NextPage from '../components/NextPage';
import { fetchRandom } from '../actions/fetchRandom';
import { connect } from 'react-redux'

class RandomRooms extends Component {
  constructor (props) {
    super(props)
    // this.getPage = this.getPage.bind(this)
  }
  componentDidMount () {
    const { getPage } = this.props
    getPage()
  }
  // getPage () {
  //   const { dispatch, page,getPage } = this.props
  //   // dispatch(fetchRandom(0))
  //   getPage()
  // }
  render() {
    const { rooms, page, getPage } = this.props
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
          点击加载更多
        </NextPage>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { random } = state
  console.log(state)
  return random
}

const mapDispatchToProps = (dispatch) => ({
    getPage: (page = 0) => { dispatch(fetchRandom(page)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomRooms);