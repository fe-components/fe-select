import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Alert from '../src/'

storiesOf('Alert', module)
  .add('with text', () => (
    <Alert prop='text' />
  ))
  .add('with long text', () => (
    <Alert prop='long text.......' />
  ))

storiesOf('Alert2', module)
  .add('more example', () => (
    <Alert prop='more example' />
  ))
  .add('more example', () => (
    <Alert prop='more example' />
  ))

if (module.hot) {
  module.hot.accept();
}
