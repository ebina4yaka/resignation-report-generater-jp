import React from 'react'
import renderer from 'react-test-renderer'
import { fireEvent, render, queryByAttribute } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import ParametersField from '../ParametersField'
import useParameters, { parametersContext } from '../../context/useParameters'

describe('ParametersField Tests', () => {
  test('Snapshot test', () => {
    const tree = renderer.create(<ParametersField />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Input onChange Handle Test', () => {
    const { result } = renderHook(() => useParameters())
    const dom = render(
      <parametersContext.Provider value={result.current}>
        <ParametersField />
      </parametersContext.Provider>
    )
    const getById = queryByAttribute.bind(null, 'id')

    const inputName = getById(dom.container, 'name') as HTMLInputElement

    const inputCompanyName = getById(
      dom.container,
      'companyName'
    ) as HTMLInputElement
    const inputDepartment = getById(
      dom.container,
      'department'
    ) as HTMLInputElement
    const inputRepresentativeDirector = getById(
      dom.container,
      'representativeDirector'
    ) as HTMLInputElement
    const inputDateOfNotification = getById(
      dom.container,
      'dateOfNotification'
    ) as HTMLInputElement
    const inputReason = getById(dom.container, 'reason') as HTMLInputElement
    const inputDaysOfPaidLeaveRemaining = getById(
      dom.container,
      'daysOfPaidLeaveRemaining'
    ) as HTMLInputElement
    const inputDateOfRetirement = getById(
      dom.container,
      'dateOfRetirement'
    ) as HTMLInputElement

    act(() => {
      fireEvent.change(inputName, { target: { value: '無職太郎' } })
      fireEvent.change(inputCompanyName, { target: { value: '株式会社無職' } })
      fireEvent.change(inputDepartment, { target: { value: '開発部退職課' } })
      fireEvent.change(inputRepresentativeDirector, {
        target: { value: '無職社長' },
      })
      fireEvent.change(inputDateOfNotification, {
        target: { value: '2020-01-01' },
      })
      fireEvent.change(inputReason, {
        target: { value: '労働基準法に違反しているため' },
      })
      fireEvent.change(inputDaysOfPaidLeaveRemaining, {
        target: { value: '10' },
      })
      fireEvent.change(inputDateOfRetirement, {
        target: { value: '2020-01-18' },
      })
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
})
