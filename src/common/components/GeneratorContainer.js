import React, { Component } from 'react'
import Select from './Select'

class GeneratorContainer extends Component {
  getTypeOptions () {
    return [
      { key: 'model', value: 'Model' },
      { key: 'view', value: 'View' },
      { key: 'controller', value: 'Controller' }
    ]
  }

  render () {
    const { languages } = this.props

    return (
      <div className='generator-container'>
        <h1>Let's generate some code!</h1>
        <Select options={languages} />
        <Select options={this.getTypeOptions()} />
        <button type='submit'>Continue</button>
      </div>
    )
  }
}

export default GeneratorContainer
