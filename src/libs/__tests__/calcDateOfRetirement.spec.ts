import calcDateOfRetirement from '../calcDateOfRetirement'

test('test for calcDateOfRetirement', () => {
  expect(calcDateOfRetirement('2020-10-11')).toBe('2020-10-25')
})
