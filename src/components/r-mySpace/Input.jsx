import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { fetchOne } from '../../actions/fetchOne'
import { addNameToList } from '../../actions/addNameToList'
// import * as allActions from '../../actions'

// const { addNameToList } = allActions

const Input = ({
  dispatch,
  nameList
}) => {
  let input
  const addStar = (e) => {
    console.log(nameList)
    e.preventDefault()
    const value = input.value
    if (nameList.indexOf(value) !== -1 || typeof value === 'undefined') 
    return false
    dispatch(addNameToList(value))
    dispatch(fetchOne(value))
  }

  return (
    <Form id="zhubo-input" onSubmit={addStar}>
      <input type="text" name="id" ref={node => input = node} />
      <button type="submit">添加</button>
    </Form>
  )
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
const mapStateToProps = state => {
  const {
    following: {
      nameList
    }
  } = state
  return {
    nameList
  }
}
export default connect(mapStateToProps)(Input)