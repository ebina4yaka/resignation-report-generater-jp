import renderer from 'react-test-renderer'
import ExportDialog from '../ExportDialog'

jest.mock('../../atoms/ConfirmButton', () => 'MockedConfirmButton')
jest.mock('../../molecules/PreviewDocxText', () => 'MockedPreviewDocxText')
jest.mock(
  '../../atoms/IsPrintPaidLeaveRequestForm',
  () => 'MockedIsPrintPaidLeaveRequestForm'
)
jest.mock(
  '../../molecules/ExportDialogButtons',
  () => 'MockedExportDialogButtons'
)
jest.mock('@material-ui/core/Dialog', () => 'MockedDialog')

test('Snapshot test for ExportDialog', () => {
  const tree = renderer.create(<ExportDialog />).toJSON()
  expect(tree).toMatchSnapshot()
})
