import React, { Component } from 'react'
import { connect } from 'react-redux'
import GeneratorContainer from '../components/GeneratorContainer'

class Home extends Component {
  render () {
    const { languages, types } = this.props

    return (
      <div className='main-wrapper'>
        <main>
          <GeneratorContainer languages={languages} types={types} />
        </main>
        <aside>

        </aside>
      </div>
    )
  }
}

export default Home
