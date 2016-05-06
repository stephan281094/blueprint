import React, { Component } from 'react'
import GeneratorContainer from '../components/GeneratorContainer'

class Home extends Component {
  render () {
    return (
      <div className='main-wrapper'>
        <main>
          <GeneratorContainer />
        </main>
        <aside>

        </aside>
      </div>
    )
  }
}

export default Home
