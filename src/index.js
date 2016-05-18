import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import log from './utils'
import styles from './index.styl'

@CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false })
export default class extends Component {
  static propTypes = {
    prop: PropTypes.string.isRequired
  }
  static defaultProps = {
    prop: 'default'
  }
  state = {
  }
  componentDidMont () {
    log('mount')
  }
  render () {
    return (
      <div styleName='wrap'>{this.props.prop}</div>
    )
  }
}
