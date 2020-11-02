import React from 'react'
import renderer from 'react-test-renderer'
import PreviewDocxBody from '../PreviewDocxBody'

test('Snapshot test for PreviewDocxBody', () => {
  const tree = renderer
    .create(
      <PreviewDocxBody reason="一身上の都合" dateOfRetirement="2020年11月7日" />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
