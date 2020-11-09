import renderer from 'react-test-renderer'
import AboutButtons from '../AboutButtons'

jest.mock('next/link', () => 'MockedLink')

test('Snapshot test for AboutButtons', () => {
  const tree = renderer.create(<AboutButtons />).toJSON()
  expect(tree).toMatchSnapshot()
})
