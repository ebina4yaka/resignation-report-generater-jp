import React, { useContext } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import ExportDialog from './ExportDialog'
import { parametersContext } from '../context/useParameters'
import ConfirmButton from '../atoms/ConfirmButton'
import useIsButtonDisable from '../hooks/useIsButtonDisable'
import useDialogOpen from '../hooks/useDialogOpen'

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

export default function ParametersConfirm(): React.ReactElement {
  const context = useContext(parametersContext)
  const classes = useStyles()
  const { isOpen, handleOpen, handleClose } = useDialogOpen()
  return (
    <div className={classes.root}>
      <ConfirmButton
        text="確認"
        isDisable={useIsButtonDisable(context)}
        onClickFunction={handleOpen}
      />
      <ExportDialog isOpen={isOpen} handleClose={handleClose} />
    </div>
  )
}
