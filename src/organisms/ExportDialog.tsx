import React, { useContext } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Dialog from '@material-ui/core/Dialog'
import { TransitionProps } from '@material-ui/core/transitions'
import Slide from '@material-ui/core/Slide'
import { parametersContext } from '../context/useParameters'
import ConfirmButton from '../atoms/ConfirmButton'
import useIsButtonDisable from '../hooks/useIsButtonDisable'
import useDialogOpen from '../hooks/useDialogOpen'
import PreviewDocxText from '../molecules/PreviewDocxText'
import ExportDialogButtons from '../molecules/ExportDialogButtons'
import IsPrintPaidLeaveRequestForm from '../atoms/IsPrintPaidLeaveRequestForm'

const useStyles = makeStyles(
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    title: {
      textAlign: 'center',
    },
    buttonArea: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  })
)

const Transition = React.forwardRef(function Transition(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,react/require-default-props
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Slide direction="up" ref={ref} {...props} />
})

export default function ExportDialog(): React.ReactElement {
  const context = useContext(parametersContext)
  const { daysOfPaidLeaveRemaining } = context
  const classes = useStyles()
  const { isOpen, handleOpen, handleClose } = useDialogOpen()
  return (
    <div className={classes.root}>
      <ConfirmButton
        text="確認"
        isDisable={useIsButtonDisable(context)}
        onClickFunction={handleOpen}
      />
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle className={classes.title}>プレビュー</DialogTitle>
        <DialogContent>
          <PreviewDocxText />
          <IsPrintPaidLeaveRequestForm
            daysOfPaidLeaveRemaining={daysOfPaidLeaveRemaining}
          />
        </DialogContent>
        <DialogActions className={classes.buttonArea}>
          <ExportDialogButtons handleClose={handleClose} />
        </DialogActions>
      </Dialog>
    </div>
  )
}
