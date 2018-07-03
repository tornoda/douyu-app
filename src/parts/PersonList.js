import React, { Component } from 'react';
import axios from "axios";
import SingleList from './SingleList.js';
import styled from "styled-components";
import 'font-awesome/css/font-awesome.min.css';

class PersonList extends Component {
  constructor (props) {
    super (props);
    this.state = {
      height: '100px',
      input: [], 
      cards: []
    };
    this.addStar = this.addStar.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }


  addStar (event) {
    event.preventDefault();
    const input = event.target.firstChild.value;
    const before = this.state.input;
    if (before.indexOf(input) !== -1) return false;
    const url = '/api/RoomApi/room/' + input;
    //从斗鱼api异步获取数据
    axios.get(url).then(function (res) {
      let response = res.data.data;
      this.setState(function (prevState, props) {
        return {
          input: prevState.input.concat(input),
          cards: prevState.cards.concat({
            ownerName: response.owner_name,
            ownerPhoto: response.avatar,
            cateName: response.cate_name,
            roomStatus: response.room_status,
            startTime: response.start_time,
            fansOnline: response.hn,
            fansTotal: response.fans_num,
            candyBox: response.gift,
          })
        }
      });
    }.bind(this)).catch(function (err) {
      alert(err);
    })
  }
  
  handleInput (e) {
    const value = e.target.value;
    this.setState(function (preState, props) {
      const preInput = preState.input;
      if (preInput[0] && value.indexOf(preInput) !== -1) return false; 
      return {
        input: preState.input.concat(value)
      }
    });
  }

  render () {
    const Cards = () => (
      <PersonContainer>
        {
          this.state.cards.map(({
            ownerPhoto,
            ownerName,
            roomStatus,
            startTime,
            fansOnline,
            fansTotal,
            candyBox,
            showGift
          }, index) => (
            <SingleList 
              ownerPhoto={ownerPhoto} 
              ownerName={ownerName} 
              roomStatus={roomStatus}
              startTime={startTime} 
              fansOnline={fansOnline} 
              fansTotal={fansTotal} 
              candyBox={candyBox}
              showGift={this.showGift}
            />
          ))
        }
      </PersonContainer>
    )
    return (
      <div className="personal-card">
        <Form id="zhubo-input" onSubmit={this.addStar}>
          <input type="text" name="id" id="zhubo-id" />
          <button type="submit">添加</button>
        </Form>
        <Cards/>
      </div>
    );
  }
}

const Form = styled.form`
  width: 100%;
  height: 35px;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding-left: 20px;
  & > input {
    text-align: center;
    margin-right: 20px;
  }
`
const PersonContainer = styled.div`
`
export default PersonList;