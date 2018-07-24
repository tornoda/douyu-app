import React from 'react'
import { connect } from 'react-redux'
import { Input, OneList } from '../../components'

const MySpace = ({ nameInfoList }) => (
  <div>
    <Input />
    <div>
      {
        nameInfoList.map((val, idx) => (
          <OneList
            key={idx}
            {...val}
          />
        ))
      }
    </div>
  </div>
)

const mapStateToProps = (state) => {
  const {
    following: {
      infoFecthed: {
        nameInfoList
      }
    }
  } = state
  return {
    nameInfoList
  }
}

export default connect(mapStateToProps)(MySpace)