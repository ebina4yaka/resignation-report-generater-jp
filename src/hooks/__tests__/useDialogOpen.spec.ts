import { renderHook, act } from '@testing-library/react-hooks'
import useDialogOpen from '../useDialogOpen'

test('test for useDialogOpen', () => {
  const { result } = renderHook(() => useDialogOpen())
  act(() => {
    result.current.handleOpen()
  })
  expect(result.current.isOpen).toBe(true)
  act(() => {
    result.current.handleClose()
  })
  expect(result.current.isOpen).toBe(false)
})
