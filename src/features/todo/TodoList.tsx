import React from 'react'
import { useTranslation } from 'react-i18next'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useGetTodos } from '@/api'
import { useRouterQuery } from '@/hooks'
import ErrorMessage from '../common/ErrorMessage'
import LoadingData from '../common/LoadingData'
import TodoItem from './TodoItem'

const TodoList = () => {
  const { t } = useTranslation()

  const listId = useRouterQuery('id')

  const [parent] = useAutoAnimate<HTMLDivElement>()

  const { data = [], isError, isLoading } = useGetTodos(listId)

  return (
    <div className="my-4 w-full">
      <LoadingData display={isLoading}>
        <p>{t('new_list.loading')}...</p>
      </LoadingData>

      <ErrorMessage className="text-center" display={isError} />

      <div ref={parent}>
        {data.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  )
}

export default TodoList
