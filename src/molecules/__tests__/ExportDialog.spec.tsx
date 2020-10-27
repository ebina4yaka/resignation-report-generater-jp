import React from 'react'
import renderer from 'react-test-renderer'
import ExportDialog from '../ExportDialog'

jest.mock('../DisplayParameters', () => 'MockedDisplayParameters')
jest.mock('../ExportDialogButtons', () => 'MockedExportDialogButtons')
jest.mock('@material-ui/core/Dialog', () => 'MockedDialog')

test('Snapshot test for ExportDialog', () => {
  const tree = renderer
    .create(<ExportDialog isOpen handleClose={() => {}} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
