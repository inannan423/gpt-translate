import React from 'react'

interface InputAreaProps {
  onContentChange: (content: string) => void
}

const InputArea = ({
  onContentChange
}: InputAreaProps): JSX.Element => {
  return (
        <textarea
            className={'w-full min-h-[200px] h-full p-2 bg-transparent outline-none resize-none'}
            placeholder={'键入内容'}
            onChange={(e) => {
              onContentChange(e.target.value)
            }}
        />
  )
}

export default InputArea
