import React, { Component } from 'react'

class GeneratorContainer extends Component {
  render () {
    return (
      <div className='generator-container'>
        <h1>Let's generate some code!</h1>
        <select>
          <option value='php'>PHP</option>
          <option value='js'>JavaScript</option>
          <option value='css'>CSS</option>
          <option value='html'>HTML</option>
        </select>
        <select>
          <option value='controller'>Controller</option>
          <option value='model'>Model</option>
          <option value='view'>View</option>
          <option value='service'>Service</option>
        </select>
        <button type='submit'>Continue</button>
      </div>
    )
  }
}

export default GeneratorContainer
