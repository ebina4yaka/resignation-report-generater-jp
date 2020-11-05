import convertNumberFromZenkaku from '../convertNumberFromZenkaku'

test('test for convertNumberFromZenkaku', () => {
  expect(convertNumberFromZenkaku('２０４３')).toBe('2043')
})
