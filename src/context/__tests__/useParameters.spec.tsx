import { renderHook, act } from '@testing-library/react-hooks'
import useParameters from '../useParameters'

test('useParameters test', () => {
  const { result } = renderHook(() => useParameters())

  act(() => {
    result.current.setName('無職太郎')
    result.current.setCompanyName('株式会社無職')
    result.current.setDepartment('開発部退職課')
    result.current.setRepresentativeDirector('無職社長')
    result.current.setDateOfNotification('2020-01-01')
    result.current.setReason('労働基準法に違反しているため')
    result.current.setDaysOfPaidLeaveRemaining(10)
    result.current.setDateOfRetirement('2020-01-18')
  })

  expect(result.current.name).toBe('無職太郎')
  expect(result.current.companyName).toBe('株式会社無職')
  expect(result.current.department).toBe('開発部退職課')
  expect(result.current.representativeDirector).toBe('無職社長')
  expect(result.current.dateOfNotification).toBe('2020-01-01')
  expect(result.current.reason).toBe('労働基準法に違反しているため')
  expect(result.current.daysOfPaidLeaveRemaining).toBe(10)
  expect(result.current.dateOfRetirement).toBe('2020-01-18')
})
