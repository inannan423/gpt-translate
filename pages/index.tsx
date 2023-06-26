import React from 'react'
import Translate from '@/components/translate'
import Header from '@/components/header'
import Head from 'next/head'

export default function Home (): JSX.Element {
  return (
        <main
            className={'flex min-h-screen flex-col items-center justify-center p-3 lg:p-24'}
        >
            <Head>
                <title>GPTTranslate</title>
                <meta name="description" content="Translate text with GPT-3" />
                <link rel="icon" href="/languages.svg" />
            </Head>
            <Header/>
            <Translate/>
        </main>
  )
}
