import React from 'react'
import { Toaster, resolveValue } from 'react-hot-toast'
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid'
import clsx from 'clsx'

export const Toast = () => {
  return (
    <Toaster position="top-right" reverseOrder={false}>
      {(toast) => {
        let alertType = 'alert-info'
        let icon = <ExclamationCircleIcon className="w-5" />

        if (toast.type === 'error') {
          icon = <XCircleIcon className="w-5" />
          alertType = 'alert-error'
        }
        if (toast.type === 'success') {
          icon = <CheckCircleIcon className="w-5" />
          alertType = 'alert-success'
        }

        return (
          <div className={clsx('alert max-w-md shadow-lg', alertType)}>
            <div>
              {icon}
              {resolveValue(toast.message, toast)}
            </div>
          </div>
        )
      }}
    </Toaster>
  )
}
