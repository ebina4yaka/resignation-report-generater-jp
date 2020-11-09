import React from 'react'
import renderer from 'react-test-renderer'
import AboutUse from '../AboutUse'

test('Snapshot test for AboutUse', () => {
  const tree = renderer.create(<AboutUse />).toJSON()
  expect(tree).toMatchSnapshot()
})
