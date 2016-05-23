import React, { Component } from 'react'

class Select extends Component {
  render () {
    const { options, handleChange } = this.props

    const optionValues   = options.list
    const selectedOption = options.selected || ''

    return (
      <select onChange={handleChange} value={selectedOption}>
        {
          optionValues.map((option) => {
            return (
              <option key={option.key} value={option.key}>
                {option.value}
              </option>
            )
          })
        }
      </select>
    )
  }
}

export default Select
