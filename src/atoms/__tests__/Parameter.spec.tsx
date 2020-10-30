import React from 'react'
import renderer from 'react-test-renderer'
import Parameter from '../Parameter'

test('Snapshot test for Parameter', () => {
  const tree = renderer
    .create(<Parameter name="test name" value="test value" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('Snapshot test for Parameter then empty value', () => {
  const tree = renderer.create(<Parameter name="test name" value="" />).toJSON()
  expect(tree).toMatchSnapshot()
})
