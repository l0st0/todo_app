import React from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/solid'
import { Button } from '@/components'

const BackButton = () => {
  const { t } = useTranslation()

  const { back } = useRouter()

  return (
    <Button
      onClick={() => back()}
      iconStart={<ArrowSmallLeftIcon className="w-6" />}
      className="btn-outline"
    >
      {t('back')}
    </Button>
  )
}

export default BackButton
