import convertDateStringToJapanFormat from '../convertDateStringToJapanFormat'

test('test for convertDateStringToJapanFormat', () => {
  expect(convertDateStringToJapanFormat('2020-10-28')).toBe(
    '2020年10月28日 水曜日'
  )
})
