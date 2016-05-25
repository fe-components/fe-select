import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import { log } from './utils'
import styles from './index.styl'

import test from './test.jpg'

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
  componentDidMount () {
    log('mount1')
  }
  render () {
    return (
      <div styleName='wrap'>
        22{this.props.prop}
        <img src={test} />
      </div>
    )
  }
}
