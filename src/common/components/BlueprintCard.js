import React, { Component } from 'react'
import { Link } from 'react-router'

class BlueprintCard extends Component {
  render () {
    const { blueprint } = this.props

    return (
      <Link to={'/' + blueprint.language + '/' + blueprint.type}
        className='blueprint-card'>
        <span className='language'>{blueprint.language}</span>
        <h2>{blueprint.title}</h2>
        <pre className='snippet'>{blueprint.snippet}</pre>
      </Link>
    )
  }
}

export default BlueprintCard
