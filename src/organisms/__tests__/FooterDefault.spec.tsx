import React from 'react'
import renderer from 'react-test-renderer'
import FooterDefault from '../FooterDefault'

jest.mock('../../atoms/Copyright', () => 'MockedCopyright')

test('Snapshot test for FooterDefault', () => {
  const tree = renderer.create(<FooterDefault />).toJSON()
  expect(tree).toMatchSnapshot()
})
