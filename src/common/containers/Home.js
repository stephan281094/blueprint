import React, { Component } from 'react'
import { connect } from 'react-redux'
import GeneratorContainer from '../components/GeneratorContainer'
import Popular from '../components/Popular'

class Home extends Component {
  render () {
    const { languages, types } = this.props

    return (
      <main>
        <GeneratorContainer languages={languages} types={types} />
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
