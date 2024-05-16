import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from './header'
import { Container } from '@mui/material'

type Props = {
  children?: ReactNode
  title?: string
}

export default function Layout({ children, title = 'This is the default title' }: Props) {
  return (

    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Container sx={{ py: 4, mt: 12 }}>
        {children}
      </Container>
    </div>
  )
}