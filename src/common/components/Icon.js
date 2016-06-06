import React, { Component } from 'react'

class Icon extends Component {
  _mergeStyles (...args) {
    return Object.assign({}, ...args)
  }

  renderGraphic () {
    switch (this.props.icon) {
      case 'multiply-big':
        return (
          <g><path d='M23,24 l-23,-23 l1,-1 l23,23 l23,-23 l1,1 l-23,23 l23,23 l-1,1 l-23,-23 l-23,23 l-1,-1 l23,-23 Z'></path></g>
        )
      case 'multiply':
        return (
          <g><path d='M23,24 l-16,-16 l1,-1 l16,16 l16,-16 l1,1 l-16,16 l16,16 l-1,1 l-16,-16 l-16,16 l-1,-1 Z'></path></g>
        )
    }
  }

  render () {
    const { size, style, className } = this.props
    let styles = {
      verticalAlign: 'middle',
      width: size,
      height: size
    }

    return (
      <svg viewBox='0 0 48 48' preserveAspectRatio='xMidYMid meet' fit
        style={this._mergeStyles(
          styles,
          style
        )} className={className}>
        {this.renderGraphic()}
      </svg>
    )
  }
}

Icon.defaultProps = {
  size: 24
}

export default Icon
