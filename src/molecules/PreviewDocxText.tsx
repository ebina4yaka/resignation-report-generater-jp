import React, { ReactElement, useContext } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { parametersContext } from '../context/useParameters'
import convertDateStringToJapanFormat from '../libs/convertDateStringToJapanFormat'
import PreviewDocxTitle from '../atoms/PreviewDocxTitle'
import PreviewDocxCompany from '../atoms/PreviewDocxCompany'
import PreviewDocxBody from '../atoms/PreviewDocxBody'
import PreviewDocxBottom from '../atoms/PreviewDocxBottom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'center',
      fontSize: '1.2em',
    },
    body: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  })
)

export default function PreviewDocxText(): ReactElement {
  const context = useContext(parametersContext)
  const {
    name,
    companyName,
    department,
    representativeDirector,
    dateOfNotification,
    reason,
    dateOfRetirement,
  } = context
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <PreviewDocxTitle />
      <PreviewDocxCompany
        companyName={companyName}
        representativeDirector={representativeDirector}
      />
      <div className={classes.body}>
        <PreviewDocxBody
          reason={reason}
          dateOfRetirement={convertDateStringToJapanFormat(dateOfRetirement)}
        />
      </div>
      <PreviewDocxBottom
        dateOfNotification={convertDateStringToJapanFormat(dateOfNotification)}
        department={department}
        name={name}
      />
    </div>
  )
}
