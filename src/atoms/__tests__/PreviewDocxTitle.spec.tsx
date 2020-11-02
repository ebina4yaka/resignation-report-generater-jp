import React from 'react'
import renderer from 'react-test-renderer'
import PreviewDocxTitle from '../PreviewDocxTitle'

test('Snapshot test for PreviewDocxTitle', () => {
  const tree = renderer.create(<PreviewDocxTitle />).toJSON()
  expect(tree).toMatchSnapshot()
})
