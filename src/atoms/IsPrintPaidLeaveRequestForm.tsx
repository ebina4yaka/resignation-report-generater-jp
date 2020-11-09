import { ReactElement } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'

type Props = {
  daysOfPaidLeaveRemaining: number
}

const useStyles = makeStyles(
  createStyles({
    root: {
      textAlign: 'left',
      color: 'silver',
    },
  })
)

export default function IsPrintPaidLeaveRequestForm(
  props: Props
): ReactElement {
  const { daysOfPaidLeaveRemaining } = props
  const classes = useStyles()
  if (daysOfPaidLeaveRemaining > 0) {
    return <div className={classes.root}>※別途有給取得の時季指定書あり</div>
  }
  return <></>
}
