import { createContext, useCallback, useState } from 'react'
import dayjs from 'dayjs'

export type ParametersContext = {
  name: string
  companyName: string
  department: string
  representativeDirector: string
  dateOfRetirement: string
  reason: string
  daysOfPaidLeaveRemaining: number
  setName: (name: string) => void
  setCompanyName: (companyName: string) => void
  setDepartment: (department: string) => void
  setRepresentativeDirector: (representativeDirector: string) => void
  setDateOfRetirement: (dateOfRetirement: string) => void
  setReason: (reason: string) => void
  setDaysOfPaidLeaveRemaining: (daysOfPaidLeaveRemaining: number) => void
}

const defaultContext: ParametersContext = {
  name: '',
  companyName: '',
  department: '',
  representativeDirector: '',
  dateOfRetirement: '',
  reason: '',
  daysOfPaidLeaveRemaining: 0,
  setName: () => {},
  setCompanyName: () => {},
  setDepartment: () => {},
  setRepresentativeDirector: () => {},
  setDateOfRetirement: () => {},
  setReason: () => {},
  setDaysOfPaidLeaveRemaining: () => {},
}

export const parametersContext = createContext<ParametersContext>(
  defaultContext
)

export default function useParameters(): ParametersContext {
  const [name, setNameState] = useState('')
  const [companyName, setCompanyNameState] = useState('')
  const [department, setDepartmentState] = useState('')
  const [representativeDirector, setRepresentativeDirectorState] = useState('')
  const [dateOfRetirement, setDateOfRetirementState] = useState(
    dayjs().format('YYYY-MM-DD')
  )
  const [reason, setReasonState] = useState('')
  const [daysOfPaidLeaveRemaining, setDaysOfPaidLeaveRemainingState] = useState(
    0
  )
  const setName = useCallback((current: string): void => {
    setNameState(current)
  }, [])
  const setCompanyName = useCallback((current: string): void => {
    setCompanyNameState(current)
  }, [])
  const setDepartment = useCallback((current: string): void => {
    setDepartmentState(current)
  }, [])
  const setRepresentativeDirector = useCallback((current: string): void => {
    setRepresentativeDirectorState(current)
  }, [])
  const setDateOfRetirement = useCallback((current: string): void => {
    setDateOfRetirementState(current)
  }, [])
  const setReason = useCallback((current: string): void => {
    setReasonState(current)
  }, [])
  const setDaysOfPaidLeaveRemaining = useCallback((current: number): void => {
    setDaysOfPaidLeaveRemainingState(current)
  }, [])
  return {
    name,
    companyName,
    department,
    representativeDirector,
    dateOfRetirement,
    reason,
    daysOfPaidLeaveRemaining,
    setName,
    setCompanyName,
    setDepartment,
    setRepresentativeDirector,
    setDateOfRetirement,
    setReason,
    setDaysOfPaidLeaveRemaining,
  }
}
