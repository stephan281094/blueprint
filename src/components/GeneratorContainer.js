import React, { Component } from 'react'
import Select from './Select'

class GeneratorContainer extends Component {
  getLanguageOptions () {
    return [
      { key: 'php', value: 'PHP' },
      { key: 'js', value: 'JavaScript' },
      { key: 'css', value: 'CSS' },
      { key: 'html', value: 'HTML' }
    ]
  }

  getTypeOptions () {
    return [
      { key: 'controller', value: 'Controller' },
      { key: 'model', value: 'Model' },
      { key: 'view', value: 'View' },
      { key: 'service', value: 'Service' }
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
