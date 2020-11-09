/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import 'typeface-roboto'
import { deepPurple, teal } from '@material-ui/core/colors'

export default function MyApp(props: AppProps): ReactElement {
  const { Component, pageProps } = props
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: teal,
          secondary: deepPurple,
        },
        overrides: {
          MuiFormLabel: {
            asterisk: {
              color: '#db3131',
              '&$error': {
                color: '#db3131',
              },
            },
          },
        },
      }),
    [prefersDarkMode]
  )

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      // eslint-disable-next-line no-unused-expressions
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>退職届ジェネレーター</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <style type="text/css">{`body { font-family: 'Roboto' }`}</style>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
