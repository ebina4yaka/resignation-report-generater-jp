import React from 'react'
import renderer from 'react-test-renderer'
import AboutParameters from '../AboutParameters'

jest.mock(
  '../../atoms/ParameterDescription',
  () => 'MockedParameterDescription'
)

test('Snapshot test for AboutParameters', () => {
  const tree = renderer.create(<AboutParameters />).toJSON()
  expect(tree).toMatchSnapshot()
})
