import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getLanguagesByKey } from '../reducers/language'

class Language extends Component {
  componentDidMount () {
    const { getLanguagesByKey, params } = this.props

    getLanguagesByKey(params.language)
  }

  render () {
    const { language } = this.props

    if (language) {
      return (
        <div>
          <h1>Language: {language.value}</h1>
          <p>Showcasing all blueprints created for {language.value}</p>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Language Page</h1>
          <p>Showcasing all blueprints created for a specific language</p>
        </div>
      )
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getLanguagesByKey
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    language: state.language.current
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Language)
