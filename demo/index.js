import React from 'react'
import {
  storiesOf
  // action
} from '@kadira/storybook'
import Select from '../src/'
/*
import Button from 'fe-button'

const theme = {

}*/

// console.log(Button)

storiesOf('Select', module)
  .add('simple select', () => (
    <div>
      <Select value='' options={[{label: '全部', value: '0'}, {label: '1', value: '1'}]} />
    </div>
  ))
