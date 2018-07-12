import React, { Component } from 'react'
import styled from 'styled-components'
import { fetchCategories } from '../../actions/fetchCategories'
import OneCategory from '../../components/r-categories/OneCategory'
import { connect } from 'react-redux'
class Categories extends Component {
  componentDidMount() {
    const { getCategories } = this.props
    getCategories()
  }

  render() {
    const { categories: { categories }, isPhoneSize } = this.props
    return (
      <div>
        {
          categories.map((val, idx) =>
            (<OneCategory
              key={idx}
              category={val}
              isPhoneSize={isPhoneSize}
            />)
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { categories, global: { isPhoneSize } } = state
  return {
    categories,
    isPhoneSize
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => { dispatch(fetchCategories()) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories)