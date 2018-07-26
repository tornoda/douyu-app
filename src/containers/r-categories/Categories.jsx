import React, { Component } from 'react'
import styled from 'styled-components'
import { fetchCategories } from '../../actions/fetchCategories'
import { OneCategory } from '../../components'
import { connect } from 'react-redux'
import { judgeScreenSize } from '../../actions/judgeScreenSize'

class Categories extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(judgeScreenSize())
    dispatch(fetchCategories())
    // getCategories()
  }

  render() {
    const { categories: { categories }, isPhoneSize } = this.props
    return (
      <div>
        {
          categories.map((val, idx) =>
            (<OneCategory
              key={idx}
              {...val}
              isPhoneSize={isPhoneSize}
            />)
          )
        }
      </div>
    )
  }
}

Categories.defaultProps = {
  categories: {
    categories: [],
  },
  isPhoneSize: false
}

const mapStateToProps = (state) => {
  const { categories, global: { isPhoneSize } } = state
  return {
    categories,
    isPhoneSize
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getCategories: () => { dispatch(fetchCategories()) }
//   }
// }

export default connect(
  mapStateToProps,
)(Categories)