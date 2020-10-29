import addTwoWeekDate from '../addTwoWeekDate'

test('test for addTwoWeekDate', () => {
  expect(addTwoWeekDate('2020-10-11')).toBe('2020-10-25')
})
