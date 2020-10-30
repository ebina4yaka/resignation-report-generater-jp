import { renderHook, act } from '@testing-library/react-hooks'
import useIsButtonDisable from '../useIsButtonDisable'
import useParameters from '../../context/useParameters'

test('test for useIsButtonDisable', () => {
  const { result: renderContext } = renderHook(() => useParameters())
  const { result, rerender } = renderHook(() =>
    useIsButtonDisable(renderContext.current)
  )

  act(() => {
    renderContext.current.setName('無職太郎')
    renderContext.current.setCompanyName('株式会社無職')
    renderContext.current.setRepresentativeDirector('無職社長')
    renderContext.current.setDateOfNotification('2020-01-01')
    renderContext.current.setReason('労働基準法に違反しているため')
  })
  rerender()
  expect(renderContext.current.name).toBe('無職太郎')
  expect(renderContext.current.companyName).toBe('株式会社無職')
  expect(renderContext.current.representativeDirector).toBe('無職社長')
  expect(renderContext.current.dateOfNotification).toBe('2020-01-01')
  expect(renderContext.current.reason).toBe('労働基準法に違反しているため')
  expect(result.current).toBe(false)

  act(() => {
    renderContext.current.setName('')
  })
  rerender()
  expect(renderContext.current.name).toBe('')
  expect(renderContext.current.companyName).toBe('株式会社無職')
  expect(renderContext.current.representativeDirector).toBe('無職社長')
  expect(renderContext.current.dateOfNotification).toBe('2020-01-01')
  expect(renderContext.current.reason).toBe('労働基準法に違反しているため')
  expect(result.current).toBe(true)
})
