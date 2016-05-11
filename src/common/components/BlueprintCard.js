import React, { Component } from 'react'

class BlueprintCard extends Component {
  render () {
    const { blueprint } = this.props

    return (
      <div className='blueprint-card'>
        <a href={'/' + blueprint.language} className='language'>
          {blueprint.language}
        </a>
        <a href={'/' + blueprint.language + '/' + blueprint.type}><h2>{blueprint.title}</h2></a>
        <pre className='snippet'>{blueprint.snippet}</pre>
      </div>
    )
  }
}

export default BlueprintCard
