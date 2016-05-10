import React, { Component } from 'react'

class BlueprintCard extends Component {
  render () {
    const { blueprint } = this.props

    return (
      <div className='blueprint-card'>
        <h2>{blueprint.title} ({blueprint.language})</h2>
      </div>
    )
  }
}

export default BlueprintCard
