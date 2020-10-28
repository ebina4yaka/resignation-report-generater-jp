import React from 'react'
import renderer from 'react-test-renderer'
import ExportConfig from '../ExportConfig'

jest.mock('../../molecules/ParametersField', () => 'MockedParametersField')
jest.mock('../../molecules/ParametersConfirm', () => 'MockedParametersConfirm')

test('Snapshot test for ExportConfig', () => {
  const tree = renderer.create(<ExportConfig />).toJSON()
  expect(tree).toMatchSnapshot()
})
