import React, { Component } from 'react'

class BlueprintCard extends Component {
  render () {
    const { blueprint } = this.props

    return (
      <a href={'/' + blueprint.language + '/' + blueprint.type}
        className='blueprint-card'>
        <span className='language'>{blueprint.language}</span>
        <h2>{blueprint.title}</h2>
        <pre className='snippet'>{blueprint.snippet}</pre>
      </a>
    )
  }
}

export default BlueprintCard
