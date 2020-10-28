import React from 'react'
import renderer from 'react-test-renderer'
import DisplayParameters from '../DisplayParameters'

jest.mock('../../atoms/Parameter', () => 'MockedParameters')

test('Snapshot test for DisplayParameters', () => {
  const tree = renderer.create(<DisplayParameters />).toJSON()
  expect(tree).toMatchSnapshot()
})
