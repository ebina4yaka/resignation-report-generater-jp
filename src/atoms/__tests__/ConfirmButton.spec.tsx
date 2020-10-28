import React from 'react'
import renderer from 'react-test-renderer'
import ConfirmButton from '../ConfirmButton'

test('Snapshot test for ConfirmButton Disable', () => {
  const tree = renderer
    .create(<ConfirmButton text="test" onClickFunction={() => {}} isDisable />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('Snapshot test for ConfirmButton Enable', () => {
  const tree = renderer
    .create(
      <ConfirmButton text="test" onClickFunction={() => {}} isDisable={false} />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
