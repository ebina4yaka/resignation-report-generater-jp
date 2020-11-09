import renderer from 'react-test-renderer'
import PreviewDocxBottom from '../PreviewDocxBottom'

test('Snapshot test for PreviewDocxBottom', () => {
  const tree = renderer
    .create(
      <PreviewDocxBottom
        name="無職太郎"
        dateOfNotification="2020年11月7日"
        department="退職部"
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
