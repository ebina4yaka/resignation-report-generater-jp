import React from 'react'
import renderer from 'react-test-renderer'
import TopPageButtons from '../TopPageButtons'

test('Snapshot test for TopPageButtons', () => {
  const tree = renderer.create(<TopPageButtons />).toJSON()
  expect(tree).toMatchSnapshot()
})
