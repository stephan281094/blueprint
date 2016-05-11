import React, { Component } from 'react'
import { connect } from 'react-redux'
import GeneratorContainer from '../components/GeneratorContainer'
import Popular from '../components/Popular'

class Home extends Component {
  render () {
    const { languages, types } = this.props

    return (
      <div className='main-wrapper'>
        <main>
          <GeneratorContainer languages={languages} types={types} />
          <Popular />
        </main>
        <aside>

        </aside>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    languages: state.languages
  }
}

export default connect(mapStateToProps)(Home)
