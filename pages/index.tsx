import React from 'react'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Github, Bot, ChevronsUp } from 'lucide-react'
import InputArea from '@/components/inputArea'

export default function Home (): JSX.Element {
  return (
    <main
      className={'flex min-h-screen flex-col items-center justify-between p-24'}
    >
      <div>
        <h1 className="text-4xl font-bold text-center my-3">
          Chat<b className={'text-gray-600'}>Translate</b>
        </h1>
        <div className={'flex my-2 gap-2 justify-center items-center'}>
          <Link href={'https://github.com/inannan423/chatgpt-translate'} target={'_blank'}>
            <Badge variant="outline" className={'font-mono cursor-pointer flex'}>
              <Github size={11} className={'mr-1'}/>
              GitHub
            </Badge>
          </Link>
          <Link href={'https://openai.com/'} target={'_blank'}>
            <Badge variant="outline" className={'font-mono cursor-pointer flex'}>
              <Bot size={11} className={'mr-1'}/>
              OpenAI
            </Badge>
          </Link>
          <Link href={'https://juejin.cn/user/453415418729422'} target={'_blank'}>
            <Badge variant="outline" className={'font-mono cursor-pointer flex'}>
              <ChevronsUp size={11} className={'mr-1'}/>
              Juejin
            </Badge>
          </Link>
        </div>
      </div>
      <div className={'grid grid-cols-2 w-full border-2 border-gray-100 rounded-2xl overflow-hidden'}>
        <div className={'w-full h-96 p-1 bg-gray-50'}>
          {/*    input */}
          <InputArea onContentChange={(content) => {
            console.log(content)
          }}/>
        </div>
        <div className={'w-full h-96 border-l-2 border-gray-100'}>

        </div>
      </div>
    </main>
  )
}
