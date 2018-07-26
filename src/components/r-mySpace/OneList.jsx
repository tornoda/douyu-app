import React, { Component, ReactDOM } from 'react'
import styled from 'styled-components'
import { Candy, Status } from '../../components'

class OneList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true,
    }
    this.listNode = React.createRef()
    this.toggleBox = this.toggleBox.bind(this)
  }

  toggleBox() {
    const { isHidden } = this.state
    if (isHidden) this.setState({
      maxHeight: '388px',
      isHidden: false,
    })
    if (!isHidden) this.setState({
      maxHeight: '0',
      isHidden: true
    })
  }

  render() {
    const { gift } = this.props
    const { maxHeight } = this.state
    return (
      <List ref={this.listNode}>
        <Status
          {...this.props}
          toggleBox={this.toggleBox}
        />
        <CandyBox style={{ maxHeight: maxHeight }}>
          {
            gift.map(({
              mimg,
              name,
              pc,
              gx
            }, index) => (
                <Candy key={index}
                  mimg={mimg}
                  name={name}
                  pc={pc}
                  gx={gx}
                />
              ))
          }
        </CandyBox>
      </List>

    )
  }
}

const List = styled.li`
  box-sizing: border-box;
  width: 47%;
  display: inline-block;
  vertical-align: top;
  background-color: #ccc;
  border-radius: 3px;
  padding: 12px 3px;
  margin: 3px 2% 2% auto;
  ${'' /* height: 100px; */}
  & * {
    box-sizing: border-box;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 3px 0 0 auto;
  }
`
// const Status = styled.div`
//   width: 100%;
//   padding: 13px 10px;
//   overflow: hidden;
//   /* @media screen and (max-width: 600px) {
//     height: 88px;
//   } */
// `
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
const CandyBox = styled.ul`
  clear: both;
  padding: 0 0 0 12px;
  margin-bottom: 0;
  box-sizing: border-box;
  line-height: 20px;
  ${'' /* height: 230px; */}
  max-height: 0;
  transition: 0.5s all;
  overflow: hidden;
  margin-top: 0;
  margin-bottom: 0;
  & li {
    height: 20px;
    line-height: 20px;
    margin-top: 5px;
  }
  & img {
    border-radius: 50%;
    width: 20px;
    float: left;
  }
  & span {
    font-size: 16px;
    float: left;
    height: 20px;
    line-height: 20px;
    margin-left: 5px;
  }
`

export default OneList