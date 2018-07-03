import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import logo from './static/img/logo.png';
import GithubLogo from './static/img/github';
import PersonalCards from './parts/PersonList.js';
import RandomRoom from './parts/RandomRoom.js';
import AllCategory from "./parts/AllCategory.js";
import axios from "axios";
import styled from "styled-components";
import 'normalize.css';
import { convertNumber } from './utility/numberDealer.js'


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      phoneSize: null,
      input: '',
      random: [],
      randomPage: 0,
      categoryReady: false,
      category: [],
      card: [],
      isLoading: false
    };
    this.onInput = this.onInput.bind(this);
    this.showCards = this.showCards.bind(this);
    this.getCategory = this.getCategory.bind(this);
    this.onPageBottom = this.onPageBottom.bind(this);
    this.judgeScreenSize = this.judgeScreenSize.bind(this);
  }
  componentWillMount () {
    this.judgeScreenSize();
    let page = this.state.randomPage;
    this.getRandomRoomInfo('api/RoomApi/live?offset=' + page + '&limit=9');
    window.addEventListener('resize', this.judgeScreenSize);
  }
  
  componentDidMount() {
    // window.addEventListener('scroll', this.onPageBottom);
    this.getCategory();
  }
  getRandomRoomInfo (url) {
    axios.get(url).then(function (res) {
      let response = res.data.data;
      console.log(response);
      this.setState(function (prevState, props) {
        // let preRandom = this.state.random.slice();
        const randomInfo = response.map(function (val) {
          return {
            roomName: val.room_name,
            roomTitle: val.room_name,
            roomSrc: val.room_src,
            roomUrl: val.url,
            fansOnline: val.hn,
            nickName: val.nickname
          };
        });
        console.log(randomInfo);
        return {
          random: prevState.random.concat(randomInfo),
          randomPage: prevState.randomPage + 1,
          isLoading: false
        }
      });
    }.bind(this)).catch(function (err) {
      console.log(err);
    });
  }
  getCategory () {
    if (this.state.categoryReady === true) return false;
    this.setState({
      categoryReady: true
    });
    const url = 'api/RoomApi/game';
    axios.get(url).then(function (res) {
      const response = res.data.data;
      const gameCategory = response.map(function (val) {
        return {
          gameId: val.cate_id,
          gameName: val.game_name,
          gameUrl: val.game_url,
          gameSrc: val.game_src,
          gameIcon: val.game_icon
        }
      })
      this.setState({
        category: gameCategory,
      });
    }.bind(this)).catch(function (err) {
      console.log(err);
    });
  }
  onInput (e) {
    this.setState({
      input: e.target.value
    })
  }
  showCards (event) {
    event.preventDefault();
    const url = '/api/RoomApi/room/' + this.state.input;
    //从斗鱼api异步获取数据
    axios.get(url).then(function (res) {
      let response = res.data.data;
      this.setState(function (prevState, props) {
        let preCards = prevState.cards.slice();
        let preRoomId = prevState.roomIdForCard.slice();
        let roomIdForCard = response.room_id;
        if (preRoomId.indexOf(roomIdForCard) === -1) {
          preRoomId.push(response.room_id);
        } else {
          return false;
        }
        preCards.push({
          ownerName: response.owner_name,
          ownerPhonto: response.avatar,
          cateName: response.cate_name,
          roomStatus: response.room_status,
          startTime: response.start_time,
          fansOnline: response.hn,
          fansTotal: response.fans_num,
          candyBox: response.gift,
        });
        return {
          cards: preCards,
          roomIdForCard: preRoomId,
        }
      });
    }.bind(this)).catch(function (err) {
      alert(err);
    })
  }
  onPageBottom (e) {
    e.preventDefault();
    let url = 'api/RoomApi/live?offset=' + this.state.randomPage + '&limit=9'
    this.setState({
      isLoading: true
    })
    this.getRandomRoomInfo(url);

  };
  judgeScreenSize () {
    let windowWitdh = document.documentElement.clientWidth;
    if (windowWitdh > 600) {
      this.setState({phoneSize: false});
    }else{
      this.setState({phoneSize: true});
    }
  }
  render() {
    const categoryState = {
      categoryReady : this.state.categoryReady,
      category: this.state.category,
      phoneSize: this.state.phoneSize
    }
    const nav = [
      ["随便看看", "/", null], 
      ["全部分类", { pathname: "/showCategory", state: categoryState}, this.showCategory], 
      ["我的关注", "/personalCards", null]
    ].map(function (val, idx) {
      return (
        <NavList key={idx} onClick={val[2]}><NavLink exact activeStyle={{color: "green"}} to={val[1]}>{val[0]}</NavLink></NavList>
      )
    })
    const RandomRooms = () => ( 
      <div id="random-room">
        <div>
          {
            this.state.random.map(function (val) {
              return (
                <RandomRoom 
                  roomName={val.roomName} 
                  roomSrc={val.roomSrc} 
                  roomUrl={val.roomUrl} 
                  fansOnline={convertNumber(val.fansOnline)} 
                  nickName={val.nickName}
                  key={val.nickName}
                />
              )
            })
          }
        </div>
        <Loading onClick={this.onPageBottom} onTouchEnd={this.onPageBottom}>
          {this.state.isLoading ? "加载中 ^_^" : "点我加载"}
        </Loading>
      </div>
    )

    return (
      <Router>
        <Container id="container">
          <Header>
            <Logo>
              <img src={logo} style={{width: '100%'}} alt="douyulogo" id="header-logo"/>
            </Logo>
          </Header>
          <Nav id="nav">
            {nav}
          </Nav>
          <div id="view-port">
            <Switch>
              <Route exact path="/" component={RandomRooms} />
              {/* <Loading>加载中。。。</Loading> */}
              <Route path="/showCategory" component={AllCategory} 
              />
              <Route path="/personalCards" component={PersonalCards} />
            </Switch>
            <Github>
              <a href="#">
                <GithubLogo />
              </a>
            </Github>
          </div>
        </Container>
      </Router>
    );
  }
}

const Container = styled.div`
  font-size: 14px;
  margin: 1rem auto;
  font-family: sans-serif;
  min-width: 840px;
  transition: width 1.5s;
  width: 75%;
  max-width: 2000px;
  @media screen and (max-width: 1000px) {
    width: 85%;
  }
  @media screen and (max-width: 450px) {
    min-width: 0px;
  }
  @media screen and (max-width: 600px) {
    width: 92%;
  }
`
const Header = styled.header`
  text-align: center;
`
const Logo = styled.header`
  display: inline-block;
  width: 150px;
  @media screen and (max-width: 600px) {
    width: 65px;
  }
`
const Nav = styled.ul`
  padding-left: 40px;
  @media screen and (max-width: 600px) {
    padding-left: 20px;
  }
`
const Github = styled.div`
  text-align: center;
`

const NavList = styled.h2`
  display: inline-block;
  margin-right: 1em;
  color: red;
  & > a {
    text-decoration: none;
    color: black;
    &:hover {
      border-bottom: 1px solid;
      padding-bottom: 1px;
    }
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const Loading = styled.h2`
  color: #666;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: green;
  }
`
export default App;
