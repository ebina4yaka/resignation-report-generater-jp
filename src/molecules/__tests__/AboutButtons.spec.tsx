import React from 'react'
import renderer from 'react-test-renderer'
import AboutButtons from '../AboutButtons'

test('Snapshot test for AboutButtons', () => {
  const tree = renderer.create(<AboutButtons />).toJSON()
  expect(tree).toMatchSnapshot()
})
