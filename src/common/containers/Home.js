import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Modal from 'react-modal'

import GeneratorContainer from '../components/GeneratorContainer'
import Popular from '../components/Popular'
import { setLanguageOption } from '../reducers/languages'
import { setTypeOption } from '../reducers/types'
import { showModal, hideModal } from '../reducers/app'

class Home extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  handleSubmit (event) {
    event.preventDefault()

    const { languages, types } = this.props
    if (languages.selected && types.selected) {
      this.context.router.push(`/${languages.selected}/${types.selected}/generate`)
    }
  }

  setLanguageOption (event) {
    this.props.setLanguageOption(event.target.value)
  }

  setTypeOption (event) {
    this.props.setTypeOption(event.target.value)
  }

  openModal () {
    this.props.showModal()
  }

  closeModal () {
    this.props.hideModal()
  }

  render () {
    const { languages, types, app } = this.props

    return (
      <main>
        {/*<GeneratorContainer
          languages={languages}
          types={types}
          handleSubmit={this.handleSubmit.bind(this)}
          setLanguageOption={this.setLanguageOption.bind(this)}
          setTypeOption={this.setTypeOption.bind(this)} />
        */}
        <Modal
          isOpen={app.showModal}
          onRequestClose={this.closeModal.bind(this)}
          overlayClassName='modal-overlay'
          className='modal'>
          <h1 className='title'>Modal title</h1>
          <p className='title-sub'>With some description</p>
          <p style={{maxWidth: 500}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button onClick={this.closeModal.bind(this)}>Close modal</button>
        </Modal>
        <h1 className='title'>Blueprints</h1>
        <span className='title-sub'>
          You have 0 blueprints. Create a <a href="javascript:void(0)" onClick={this.openModal.bind(this)}>new</a> one.</span>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    languages: state.languages,
    types: state.types,
    app: state.app
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setLanguageOption,
    setTypeOption,
    showModal,
    hideModal
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
