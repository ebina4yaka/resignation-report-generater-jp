import renderer from 'react-test-renderer'
import ParameterDescription from '../ParameterDescription'

test('Snapshot test for ParameterDescription', () => {
  const tree = renderer
    .create(
      <ParameterDescription name="test" description={['test1', 'test2']} />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
