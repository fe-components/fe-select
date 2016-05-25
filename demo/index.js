import React from 'react'
import {
  storiesOf
  // action
} from '@kadira/storybook'
import Alert from '../src/'
/*
import Button from 'fe-button'

const theme = {

}*/

// console.log(Button)

storiesOf('Alert', module)
  .add('with text', () => (
    <div>
      <Alert prop='xxx' />
      <button>test</button>
    </div>
  ))
  .add('with long text', () => (
    <Alert prop='long text.......' />
  ))
  .add('11111', () => (
    <Alert prop='1111.......' />
  ))

storiesOf('Table', module)
  .add('more example', () => (
    <Alert prop='more example' />
  ))
  .add('more example', () => (
    <Alert prop='more example' />
  ))

storiesOf('Sug', module)
  .add('more example', () => (
    <Alert prop='more example' />
  ))
  .add('more example', () => (
    <Alert prop='more example' />
  ))
