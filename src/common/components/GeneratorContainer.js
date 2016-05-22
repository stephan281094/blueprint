import React, { Component } from 'react'
import Select from './Select'

class GeneratorContainer extends Component {
  render () {
    const {
      languages,
      types,
      handleSubmit,
      setLanguageOption,
      setTypeOption
    } = this.props

    return (
      <div className='generator-container'>
        <div className='container'>
          <div className='generator-title'>
            <h1>Let's generate some code!</h1>
          </div>
          <div className='generator-settings'>
            <form onSubmit={handleSubmit}>
              <Select handleChange={setLanguageOption} options={languages} />
              <Select handleChange={setTypeOption} options={types} />
              <button type='submit'>Continue</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default GeneratorContainer
