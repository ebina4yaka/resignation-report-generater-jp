import React from 'react'
import renderer from 'react-test-renderer'
import ExportDialogButtons from '../ExportDialogButtons'

test('Snapshot test for ExportDialogButtons', () => {
  const tree = renderer
    .create(<ExportDialogButtons handleClose={() => {}} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
