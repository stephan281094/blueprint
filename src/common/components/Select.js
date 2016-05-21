import React, { Component } from 'react'

class Select extends Component {
  render () {
    const { options, handleChange } = this.props

    return (
      <select onChange={handleChange}>
        {
          options.map((option) => {
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
