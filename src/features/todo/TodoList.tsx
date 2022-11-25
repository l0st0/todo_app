import React from 'react'
import { useTranslation } from 'react-i18next'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import clsx from 'clsx'
import { useGetTodos } from '@/api'
import { Button, TextInput } from '@/components'
import { useRouterQuery } from '@/hooks'
import { includesString, tDynamicString } from '@/utils'
import ErrorMessage from '../common/ErrorMessage'
import LoadingData from '../common/LoadingData'
import TodoItem from './TodoItem'

type Filter = 'all' | 'done' | 'active'

const TodoList = () => {
  const [search, setSearch] = React.useState('')
  const [filter, setFilter] = React.useState<Filter>('all')

  const { t } = useTranslation()

  const listId = useRouterQuery('id')

  const [parent] = useAutoAnimate<HTMLDivElement>()

  const { data = [], isError, isLoading } = useGetTodos(listId)

  const todos = React.useMemo(() => {
    let newData = [...data]

    if (search)
      newData = newData.filter(
        (item) =>
          includesString(item.title, search) ||
          includesString(item.description, search)
      )

    if (filter === 'active') newData = newData.filter((todo) => !todo.isDone)
    if (filter === 'done') newData = newData.filter((todo) => todo.isDone)

    return newData
  }, [data, search, filter])

  const filterTypes: Filter[] = ['all', 'active', 'done']
  const onFilterChange = (filter: Filter) => () => setFilter(filter)

  return (
    <div className="mt-12 w-full space-y-2">
      <div className="flex gap-4">
        <TextInput
          placeholder="Search by title or description"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex gap-2">
          {filterTypes.map((filterType) => (
            <Button
              onClick={onFilterChange(filterType)}
              className={clsx(filter === filterType && 'btn-primary')}
            >
              {t(tDynamicString(filterType))}
            </Button>
          ))}
        </div>
      </div>

      <LoadingData display={isLoading}>
        <p>{t('todo.loading')}...</p>
      </LoadingData>

      <ErrorMessage className="text-center" display={isError} />

      <div ref={parent}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  )
}

export default TodoList
