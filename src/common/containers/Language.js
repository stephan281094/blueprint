import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getLanguagesByKey } from '../reducers/languages'
import NotFound from './NotFound'

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
    }

    return <NotFound />
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getLanguagesByKey
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    language: state.languages.current
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Language)
