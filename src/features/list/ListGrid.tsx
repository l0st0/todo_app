import React from 'react'
import { useTranslation } from 'react-i18next'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useGetLists } from '@/api'
import { Spinner } from '@/components'
import ListItem from './ListItem'

const ListGrid = () => {
  const { t } = useTranslation()

  const [parent] = useAutoAnimate<HTMLDivElement>()

  const { data = [], isError, isLoading } = useGetLists()

  return (
    <>
      {isLoading && <Spinner className="my-4" />}
      {isError && <p className="my-4">{t('errors.isError')}</p>}

      <div ref={parent} className="my-4 grid w-full grid-cols-auto-15 gap-4">
        {data.map((list) => (
          <ListItem key={list.id} {...list} />
        ))}
      </div>
    </>
  )
}

export default ListGrid
