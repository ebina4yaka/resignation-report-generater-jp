import { createContext, useCallback, useState } from 'react'
import dayjs from 'dayjs'
import calcDateOfRetirement from '../libs/calcDateOfRetirement'

export type ParametersContext = {
  name: string
  companyName: string
  department: string
  representativeDirector: string
  dateOfNotification: string
  reason: string
  daysOfPaidLeaveRemaining: number
  dateOfRetirement: string
  setName: (name: string) => void
  setCompanyName: (companyName: string) => void
  setDepartment: (department: string) => void
  setRepresentativeDirector: (representativeDirector: string) => void
  setDateOfNotification: (dateOfNotification: string) => void
  setReason: (reason: string) => void
  setDaysOfPaidLeaveRemaining: (daysOfPaidLeaveRemaining: number) => void
  setDateOfRetirement: (dateOfRetirement: string) => void
}

const defaultContext: ParametersContext = {
  name: '',
  companyName: '',
  department: '',
  representativeDirector: '',
  dateOfNotification: '',
  reason: '',
  daysOfPaidLeaveRemaining: 0,
  dateOfRetirement: '',
  setName: () => {},
  setCompanyName: () => {},
  setDepartment: () => {},
  setRepresentativeDirector: () => {},
  setDateOfNotification: () => {},
  setReason: () => {},
  setDaysOfPaidLeaveRemaining: () => {},
  setDateOfRetirement: () => {},
}

export const parametersContext = createContext<ParametersContext>(
  defaultContext
)

export default function useParameters(): ParametersContext {
  const [name, setNameState] = useState('')
  const [companyName, setCompanyNameState] = useState('')
  const [department, setDepartmentState] = useState('')
  const [representativeDirector, setRepresentativeDirectorState] = useState('')
  const [dateOfNotification, setDateOfNotificationState] = useState(
    dayjs().format('YYYY-MM-DD')
  )
  const [reason, setReasonState] = useState('')
  const [daysOfPaidLeaveRemaining, setDaysOfPaidLeaveRemainingState] = useState(
    0
  )
  const [dateOfRetirement, setDateOfRetirementState] = useState(
    calcDateOfRetirement(dateOfNotification, daysOfPaidLeaveRemaining)
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
  const setDateOfNotification = useCallback((current: string): void => {
    setDateOfNotificationState(current)
  }, [])
  const setReason = useCallback((current: string): void => {
    setReasonState(current)
  }, [])
  const setDaysOfPaidLeaveRemaining = useCallback((current: number): void => {
    setDaysOfPaidLeaveRemainingState(current)
  }, [])
  const setDateOfRetirement = useCallback((current: string): void => {
    setDateOfRetirementState(current)
  }, [])
  return {
    name,
    companyName,
    department,
    representativeDirector,
    dateOfNotification,
    reason,
    daysOfPaidLeaveRemaining,
    dateOfRetirement,
    setName,
    setCompanyName,
    setDepartment,
    setRepresentativeDirector,
    setDateOfNotification,
    setReason,
    setDaysOfPaidLeaveRemaining,
    setDateOfRetirement,
  }
}
