import React, { useEffect } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Github, Settings2, FileClock } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'
import { getHistory } from '@/lib/history'

const Links = (): JSX.Element => {
  const [api, setApi] = React.useState('')
  const [key, setKey] = React.useState('')
  const { toast } = useToast()
  const saveSettings = (): void => {
    localStorage.setItem('gpt-translate-api', api)
    localStorage.setItem('gpt-translate-key', key)
    toast({
      title: 'Settings saved',
      description: 'Your settings have been saved.'
    })
  }
  const [history, setHistory] = React.useState<Array<{
    originLanguageContent: string
    translatedLanguageContent: string
  }>>([])
  useEffect(() => {
    setHistory(getHistory())
  }, [])
  return (
        <>
            <Link href={'https://github.com/inannan423/gpt-translate'} target={'_blank'}>
                <Badge variant="secondary" className={'font-mono cursor-pointer flex'}>
                    <Github size={11} className={'mr-1'}/>
                    GitHub
                </Badge>
            </Link>
            <Sheet>
                <SheetTrigger asChild>
                    <Badge
                        variant="outline"
                        className={'font-mono cursor-pointer flex'}
                        onClick={() => {
                          setHistory(getHistory())
                        }}
                    >
                        <FileClock size={11} className={'mr-1'}/>
                        History
                    </Badge>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>History</SheetTitle>
                        <SheetDescription>
                            Your translation history will be displayed here.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="flex flex-col py-4 h-full pb-10 overflow-auto">
                        {history?.map((item, index) => {
                          return (
                                <div
                                     key={index}
                                     className={'bg-gray-50 p-2 rounded-md my-1 cursor-pointer'}
                                     onClick={() => {
                                       void window.navigator.clipboard.writeText(item.translatedLanguageContent)
                                       toast({
                                         title: 'Copied',
                                         description: 'The translation has been copied to the clipboard.'
                                       })
                                     }}
                                >
                                    <div className={'text-gray-400'}>{item.originLanguageContent}</div>
                                    <div className={'text-gray-600'}>{item.translatedLanguageContent}</div>
                                </div>
                          )
                        })}
                    </div>
                </SheetContent>
            </Sheet>
            <Dialog>
                <DialogTrigger asChild>
                    <Badge className={'font-mono cursor-pointer flex'}>
                        <Settings2 size={11} className={'mr-1'}/>
                        Settings
                    </Badge>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle className={'flex'}>
                            <Settings2 size={16} className={'mr-1'}/>
                            Settings
                        </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                API
                            </Label>
                            <Input
                                id="api"
                                value={api}
                                placeholder={'https://api.yourdomain.com/v1'}
                                className="col-span-3"
                                onChange={(e) => {
                                  setApi(e.target.value)
                                }}
                            />
                        </div>
                        <div className={'text-[1px] text-gray-600'}>
                            原 API 在国内无法访问 ，因此可以使用代理，填写 API 代理地址，如：https://api.yourdomain.com/v1，如果没有可填：https://api.openai.com/v1，获取代理可参考 <a className={'text-gray-400'} href={'https://github.com/x-dr/chatgptProxyAPI'} target={'_blank'} rel="noreferrer">这个项目</a>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                API Key
                            </Label>
                            <Input
                                id="key"
                                value={key}
                                className="col-span-3"
                                onChange={(e) => {
                                  setKey(e.target.value)
                                }}
                            />
                        </div>
                        <div className={'text-[1px] text-gray-600'}>
                            填写 API Key，如：sk-1234567890，必填，可到 <a className={'text-gray-400'} href={'https://platform.openai.com/overview'} target={'_blank'} rel="noreferrer">https://platform.openai.com/overview</a> 查看
                        </div>
                        <div className={'text-[1px] text-gray-600'}>
                            以上内容均存储至浏览器本地，不会上传至服务器
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            type="submit"
                            onClick={() => {
                              saveSettings()
                            }}
                        >
                            Save changes
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
  )
}

export default Links
