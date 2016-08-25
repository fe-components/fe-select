import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import CSSModules from 'react-css-modules'

import 'react-select/dist/react-select.min.css'
import styles from './index.styl'

@CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false })

export default class extends Component {
  static propTypes = {
    inputWidth: PropTypes.string,
    labelWidth: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
      ]),
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
    })),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    required: PropTypes.bool
  }
  static defaultProps = {
    inputWidth: '200px'
  }
  handleChange (v) {
    if (!this.props.multi && Array.isArray(v)) {                                                    // 防止传回错误的value
      return false
    }
    let e = {}
    e.target = {}
    if (v) {
      e.target.value = v.value || v.map(o => o.value)
    } else {
      e.target.value = ''
    }
    this.props.onChange(e)
  }

  render () {
    return (
      <div styleName='Select' style={Object.assign({}, this.props.style)}>
        <label>
          {
            this.props.label
            ? <span styleName={this.props.required ? 'label required' : 'label'} style={Object.assign({}, {width: this.props.labelWidth})}>{this.props.label}</span>
            : <span></span>
          }
          <div style={Object.assign({}, {width: this.props.inputWidth})}>
            <Select
              searchable={false}
              clearable={false}
              {...this.props}
              onChange={this.props.onChange ? this.handleChange.bind(this) : null} />
          </div>
        </label>
      </div>
    )
  }
}
