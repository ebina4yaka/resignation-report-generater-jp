import React from 'react'
import renderer from 'react-test-renderer'
import ParametersField from '../ParametersField'

test('Snapshot test for ParametersField', () => {
  const tree = renderer.create(<ParametersField />).toJSON()
  expect(tree).toMatchSnapshot()
})
