import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import { TransitionProps } from '@material-ui/core/transitions'
import Slide from '@material-ui/core/Slide'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import ExportDialogButtons from './ExportDialogButtons'
import DisplayParameters from './DisplayParameters'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

const useStyles = makeStyles(
  createStyles({
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

export default function ExportDialog(props: Props): React.ReactElement {
  const { isOpen, handleClose } = props
  const classes = useStyles()
  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">入力内容の確認</DialogTitle>
      <DialogContent>
        <DisplayParameters />
      </DialogContent>
      <DialogActions className={classes.buttonArea}>
        <ExportDialogButtons handleClose={handleClose} />
      </DialogActions>
    </Dialog>
  )
}
