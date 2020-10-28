import React from 'react'
import renderer from 'react-test-renderer'
import ParametersConfirm from '../ParametersConfirm'

jest.mock('../../atoms/ConfirmButton', () => 'MockedConfirmButton')
jest.mock('../ExportDialog', () => 'MockedExportDialog')

test('Snapshot test for ParametersConfirm', () => {
  const tree = renderer.create(<ParametersConfirm />).toJSON()
  expect(tree).toMatchSnapshot()
})
