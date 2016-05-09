import React, { Component } from 'react'
import Select from './Select'

class GeneratorContainer extends Component {
  getLanguageOptions () {
    return [
      { key: 'php', value: 'PHP' },
      { key: 'js', value: 'JavaScript' },
      { key: 'html', value: 'HTML' }
    ]
  }

  getTypeOptions () {
    return [
      { key: 'model', value: 'Model' },
      { key: 'view', value: 'View' },
      { key: 'controller', value: 'Controller' }
    ]
  }

  render () {
    return (
      <div className='generator-container'>
        <h1>Let's generate some code!</h1>
        <Select options={this.getLanguageOptions()} />
        <Select options={this.getTypeOptions()} />
        <button type='submit'>Continue</button>
      </div>
    )
  }
}

export default GeneratorContainer
