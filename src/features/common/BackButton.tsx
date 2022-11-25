import React from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/solid'
import { twMerge } from 'tailwind-merge'
import { Button, ButtonProps } from '@/components'

const BackButton = ({ children, className }: ButtonProps) => {
  const { t } = useTranslation()
  const { back } = useRouter()

  return (
    <Button
      onClick={() => back()}
      icon={<ArrowSmallLeftIcon className="w-6" />}
      className={twMerge('btn-outline', className)}
    >
      {children || t('back')}
    </Button>
  )
}

export default BackButton
