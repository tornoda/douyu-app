import React from 'react';
import Header from '../components/Header'
import RandomRooms from './RandomRooms'
import Footer from '../components/Footer'
import configureStore from '../store/store'
import { Provider } from 'react-redux'
import styled from 'styled-components'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Container /*注意这里的div包裹不能少*/>
      <Header />
      <RandomRooms/>
      <Footer />
    </Container>
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
