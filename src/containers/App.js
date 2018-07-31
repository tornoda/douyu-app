import 'normalize.css';
import React, { Component } from 'react'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'
import '../css/style.css'
import { Provider } from 'react-redux'
import styled from 'styled-components'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { CATEGORIES, MYSPACE } from '../components/Nav/Nav'
import {
  Nav,
  Header,
  Footer
} from '../components'
import {
  RandomRooms,
  Categories,
  MySpace
} from './'
// const store = configureStore()

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Container /*注意这里的div包裹不能少*/>
        <Header />
        <Nav />
        <Route
          render={({ location }) => (
            /* 
             *在多http请求的情况下使用动画是不明智的
             *有比较明显的卡吨和性能消耗
             *这里只是提供学习、体验
            */
            // <TransitionGroup>
            //   <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Switch location={location}>
              <Route exact path='/' component={RandomRooms} />
              <Route path={CATEGORIES} component={Categories} />
              <Route path={MYSPACE} component={MySpace} />
            </Switch>
            //   </CSSTransition>
            // </TransitionGroup>
          )}
        />
        <Footer />
      </Container>
    </Router>
  </Provider>
)

const Container = styled.div`
  font-size: 14px;
  margin: 1rem auto;
  font-family: sans-serif;
  min-width: 900px;
  transition: all 1s;
  width: 75%;
  max-width: 2000px;
  @media screen and (max-width: 1000px) {
    width: 85%;
  }
  @media screen and (max-width: 600px) {
    width: 92%;
    min-width: 550px;
  }
`

export default App;
