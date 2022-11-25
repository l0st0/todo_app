import React from 'react'
import { useTranslation } from 'react-i18next'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useGetLists } from '@/api'
import ErrorMessage from '../common/ErrorMessage'
import LoadingData from '../common/LoadingData'
import ListItem from './ListItem'

const ListGrid = () => {
  const { t } = useTranslation()

  const [parent] = useAutoAnimate<HTMLDivElement>()

  const { data = [], isError, isLoading } = useGetLists()

  return (
    <div className="my-4 w-full">
      <LoadingData display={isLoading}>
        <p>{t('list.loading')}...</p>
      </LoadingData>

      <ErrorMessage display={isError} />

      <div ref={parent} className="grid w-full grid-cols-auto-15 gap-4">
        {data.map((list) => (
          <ListItem key={list.id} {...list} />
        ))}

        {!data.length && !isLoading && (
          <div className="text-center">{t('list.empty_list')}</div>
        )}
      </div>
    </div>
  )
}

export default ListGrid
