import renderer from 'react-test-renderer'
import PreviewDocxText from '../PreviewDocxText'

jest.mock('../../atoms/PreviewDocxBody', () => 'MockedPreviewDocxBody')
jest.mock('../../atoms/PreviewDocxBottom', () => 'MockedPreviewDocxBottom')
jest.mock('../../atoms/PreviewDocxCompany', () => 'MockedPreviewDocxCompany')
jest.mock('../../atoms/PreviewDocxTitle', () => 'MockedPreviewDocxTitle')

test('Snapshot test for PreviewDocxText', () => {
  const tree = renderer.create(<PreviewDocxText />).toJSON()
  expect(tree).toMatchSnapshot()
})
