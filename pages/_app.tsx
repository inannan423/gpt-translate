import React from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from '@/components/ui/toaster'

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Component {...pageProps} />
    <Toaster />
  </>
}
