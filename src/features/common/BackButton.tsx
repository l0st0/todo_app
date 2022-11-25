import React from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/solid'
import { twMerge } from 'tailwind-merge'
import { Button, ButtonProps } from '@/components'

const BackButton = ({ children, className }: ButtonProps) => {
  const { t } = useTranslation()
  const { push } = useRouter()

  return (
    <Button
      onClick={() => push('/')}
      icon={<ArrowSmallLeftIcon className="w-6" />}
      className={twMerge('btn-outline', className)}
    >
      {children || t('back')}
    </Button>
  )
}

export default BackButton
