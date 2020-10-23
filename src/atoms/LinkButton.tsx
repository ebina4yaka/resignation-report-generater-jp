import React, { forwardRef, ReactElement } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

type Props = {
  href: string
  text: string
  color: 'primary' | 'secondary' | 'inherit' | 'default'
  variant: 'text' | 'outlined' | 'contained'
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(2),
    },
    button: {
      width: '14ch',
    },
  })
)

export default forwardRef(
  (
    props: Props,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: React.Ref<JSX.Element>
  ): ReactElement => {
    const { href, text, color, variant } = props
    const classes = useStyles()
    return (
      <Link href={href} passHref>
        <Button
          className={clsx(classes.margin, classes.button)}
          variant={variant}
          color={color}
        >
          {text}
        </Button>
      </Link>
    )
  }
)
