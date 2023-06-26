import React from 'react'
import Links from '@/components/links'

const Header = (): JSX.Element => {
  return (
        <>
            <div className={'my-2'}>
                <h1 className="text-4xl font-bold text-center my-3">
                    GPT<b className={'text-gray-600'}>Translate</b>
                </h1>
                <div className={'flex my-2 gap-2 justify-center items-center'}>
                    <Links />
                </div>
            </div>
        </>
  )
}

export default Header
