import React, { Component } from 'react';
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import RandomRooms from './r-randomRooms/RandomRooms'
import Categories from '../containers/r-categories/Categories'
import configureStore from '../store/store'
import { judgeScreenSize } from '../actions/judgeScreenSize'
import { Provider } from 'react-redux'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Nav, { CATEGORIES, MYSPACE } from '../components/Nav/Nav'

// const store = configureStore()

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Container /*注意这里的div包裹不能少*/>
        <Header />
        <Nav />
        <Switch>
          <Route exact path='/' component={RandomRooms} />
          <Route path={CATEGORIES} component={Categories} />
          {/* <Route path={MYSPACE} component={MySpace}/> */}
        </Switch>
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
