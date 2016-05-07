import React, { Component } from 'react'

class Select extends Component {
  render () {
    const options = this.props.options.map((option) => {
      return <option key={option.key} value={option.key}>{option.value}</option>
    })

    return (
      <select className='select'>
        {options}
      </select>
    )
  }
}

export default Select
