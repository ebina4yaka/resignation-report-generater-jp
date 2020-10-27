import removeNonNumberFromString from '../removeNonNumberFromString'

test('test for removeNonNumberFromString', () => {
  expect(removeNonNumberFromString('1o0')).toBe('10')
  expect(removeNonNumberFromString('0a')).toBe('0')
  expect(removeNonNumberFromString('a0a34')).toBe('034')
})
