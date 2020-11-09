import renderer from 'react-test-renderer'
import HeroButtons from '../HeroButtons'

jest.mock('next/link', () => 'MockedLink')

test('Snapshot test for HeroButtons', () => {
  const tree = renderer.create(<HeroButtons />).toJSON()
  expect(tree).toMatchSnapshot()
})
