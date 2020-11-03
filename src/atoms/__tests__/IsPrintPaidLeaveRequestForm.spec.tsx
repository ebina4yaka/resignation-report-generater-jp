import React from 'react'
import renderer from 'react-test-renderer'
import IsPrintPaidLeaveRequestForm from '../IsPrintPaidLeaveRequestForm'

test('Snapshot test for PreviewDocxTitle daysOfPaidLeaveRemaining is 0', () => {
  const tree = renderer
    .create(<IsPrintPaidLeaveRequestForm daysOfPaidLeaveRemaining={0} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('Snapshot test for PreviewDocxTitle daysOfPaidLeaveRemaining is 1', () => {
  const tree = renderer
    .create(<IsPrintPaidLeaveRequestForm daysOfPaidLeaveRemaining={1} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
