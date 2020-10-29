import { useEffect, useState } from 'react'
import { ParametersContext } from '../context/useParameters'

export default function useIsButtonDisable(
  context: ParametersContext
): boolean {
  const {
    name,
    companyName,
    representativeDirector,
    dateOfNotification,
    reason,
  } = context
  const [isDisable, setIsDisable] = useState(false)
  useEffect(() => {
    setIsDisable(
      name === '' ||
        companyName === '' ||
        representativeDirector === '' ||
        dateOfNotification === '' ||
        reason === ''
    )
  }, [context])
  return isDisable
}
