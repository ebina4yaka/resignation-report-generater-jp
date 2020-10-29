import calcDateOfRetirement from '../calcDateOfRetirement'

test('test for calcDateOfRetirement', () => {
  expect(calcDateOfRetirement('2020-10-11', 13)).toBe('2020-10-25')
  expect(calcDateOfRetirement('2020-10-11', 14)).toBe('2020-10-25')
  expect(calcDateOfRetirement('2020-10-11', 15)).toBe('2020-10-26')
  expect(calcDateOfRetirement('2020-10-11', 16)).toBe('2020-10-27')
  expect(calcDateOfRetirement('2020-10-11', 20)).toBe('2020-10-31')
})
