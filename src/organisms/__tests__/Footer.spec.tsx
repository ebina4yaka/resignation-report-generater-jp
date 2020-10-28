import React from 'react'
import renderer from 'react-test-renderer'
import Footer from '../Footer'

jest.mock('../../atoms/Copyright', () => 'MockedCopyright')

test('Snapshot test for Footer', () => {
  const tree = renderer.create(<Footer />).toJSON()
  expect(tree).toMatchSnapshot()
})
