import React from 'react'
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'

export function Toaster (): JSX.Element {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {/* eslint-disable-next-line */}
      {/* @ts-ignore */}
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {(Boolean(title)) && <ToastTitle>{title}</ToastTitle>}
              {(Boolean(description)) && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
