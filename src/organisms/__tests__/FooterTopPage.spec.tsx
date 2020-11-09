import renderer from 'react-test-renderer'
import FooterTopPage from '../FooterTopPage'

jest.mock('../../atoms/Copyright', () => 'MockedCopyright')

test('Snapshot test for FooterTopPage', () => {
  const tree = renderer.create(<FooterTopPage />).toJSON()
  expect(tree).toMatchSnapshot()
})
