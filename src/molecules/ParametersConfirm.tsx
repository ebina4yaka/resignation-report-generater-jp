import React, { useContext, useEffect } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import ExportDialog from './ExportDialog'
import { parametersContext } from '../context/useParameters'
import ConfirmButton from '../atoms/ConfirmButton'

const useStyles = makeStyles(
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  })
)

const useIsButtonDisable = (): boolean => {
  const context = useContext(parametersContext)
  const { name, companyName, dateOfRetirement, reason } = context
  const [isDisable, setIsDisable] = React.useState(false)
  useEffect(() => {
    setIsDisable(
      name === '' ||
        companyName === '' ||
        dateOfRetirement === '' ||
        reason === ''
    )
  }, [context])
  return isDisable
}

const useDialogOpen = (): {
  isOpen: boolean
  handleOpen: () => void
  handleClose: () => void
} => {
  const [isOpen, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return { isOpen, handleOpen, handleClose }
}

export default function ParametersConfirm(): React.ReactElement {
  const classes = useStyles()
  const { isOpen, handleOpen, handleClose } = useDialogOpen()
  return (
    <div className={classes.root}>
      <ConfirmButton
        text="確認"
        isDisable={useIsButtonDisable()}
        onClickFunction={handleOpen}
      />
      <ExportDialog isOpen={isOpen} handleClose={handleClose} />
    </div>
  )
}
