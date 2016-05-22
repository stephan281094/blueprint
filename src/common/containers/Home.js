import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GeneratorContainer from '../components/GeneratorContainer'
import Popular from '../components/Popular'
import { setLanguageOption } from '../reducers/languages'
import { setTypeOption } from '../reducers/types'

class Home extends Component {
  handleSubmit (event) {
    event.preventDefault()
    console.log('submitting the form')
  }

  setLanguageOption (event) {
    this.props.setLanguageOption(event.target.value)
  }

  setTypeOption (event) {
    this.props.setTypeOption(event.target.value)
  }

  render () {
    const { languages, types } = this.props

    return (
      <main>
        <GeneratorContainer
          languages={languages}
          types={types}
          handleSubmit={this.handleSubmit.bind(this)}
          setLanguageOption={this.setLanguageOption.bind(this)}
          setTypeOption={this.setTypeOption.bind(this)} />
        <Popular />
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    languages: state.languages,
    types: state.types
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setLanguageOption,
    setTypeOption
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
