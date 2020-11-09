import renderer from 'react-test-renderer'
import TopPageButtons from '../TopPageButtons'

jest.mock('next/link', () => 'MockedLink')

test('Snapshot test for TopPageButtons', () => {
  const tree = renderer.create(<TopPageButtons />).toJSON()
  expect(tree).toMatchSnapshot()
})
