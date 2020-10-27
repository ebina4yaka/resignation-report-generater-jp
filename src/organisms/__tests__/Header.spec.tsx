import React from 'react'
import renderer from 'react-test-renderer'
import Header from '../Header'

test('Snapshot test for Header', () => {
  const tree = renderer.create(<Header headerTitle="test" />).toJSON()
  expect(tree).toMatchSnapshot()
})
