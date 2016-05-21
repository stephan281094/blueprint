import React, { Component } from 'react'
import { connect } from 'react-redux'
import GeneratorContainer from '../components/GeneratorContainer'
import Popular from '../components/Popular'

class Home extends Component {
  handleSubmit (event) {
    event.preventDefault()
    console.log('submitting the form')
  }

  handleChange (event) {
    event.preventDefault()
    console.log('Changing the generator options')
  }

  render () {
    const { languages, types } = this.props

    return (
      <main>
        <GeneratorContainer languages={languages} types={types}
          handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <Popular />
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    languages: state.language.list,
    types: state.types
  }
}

export default connect(mapStateToProps)(Home)
