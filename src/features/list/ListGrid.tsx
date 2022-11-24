import React from 'react'
import { useTranslation } from 'react-i18next'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useGetLists } from '@/api'
import { ErrorMessage, Spinner } from '@/components'
import ListItem from './ListItem'

const ListGrid = () => {
  const { t } = useTranslation()

  const [parent] = useAutoAnimate<HTMLDivElement>()

  const { data = [], isError, isLoading } = useGetLists()

  return (
    <div className="my-4 mx-auto w-full">
      {isLoading && (
        <div className="flex flex-col items-center gap-2">
          <Spinner /> <p>{t('new_list.loading')}...</p>
        </div>
      )}

      {isError && (
        <ErrorMessage className="text-center">
          {t('errors.isError')}
        </ErrorMessage>
      )}

      <div ref={parent} className="grid w-full grid-cols-auto-15 gap-4">
        {data.map((list) => (
          <ListItem key={list.id} {...list} />
        ))}
      </div>
    </div>
  )
}

export default ListGrid
