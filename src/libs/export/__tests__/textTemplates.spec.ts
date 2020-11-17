import {
  getCompanyName,
  getRepresentativeDirector,
  getReason,
} from '../textTemplates'

describe('textTemplates tests', () => {
  test('test for getCompanyName', () => {
    expect(getCompanyName('株式会社無職')).toBe('株式会社無職 御中')
  })

  test('test for getRepresentativeDirector', () => {
    expect(getRepresentativeDirector('無職')).toBe('（代表取締役 無職 様）')
  })

  test('test for getReason', () => {
    expect(getReason('一身上の都合', '2020年10月11日')).toBe(
      'このたび一身上の都合により2020年10月11日をもって' +
        '退職することといたしましたので、民法627条1項に基づき、本日、労働契約について解約の申し入れをいたします。'
    )
  })
})
