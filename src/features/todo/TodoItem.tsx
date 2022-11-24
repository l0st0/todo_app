import React from 'react'
import { TrashIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { useDeleteTodo, useUpdateTodo } from '@/api'
import { Button, CheckBox } from '@/components'
import { Todo } from '@/types'

interface TodoItemProps extends Todo {}

const TodoItem = (todo: TodoItemProps) => {
  const { title, description, isDone, listId, id } = todo

  const { mutate: deleteTodo, isLoading } = useDeleteTodo(listId)
  const { mutate: updateTodo } = useUpdateTodo(listId, id)

  return (
    <div className="flex items-start justify-between border-b border-base-content">
      <div className="flex flex-1">
        <CheckBox
          className="mt-4"
          checked={isDone}
          onChange={(e) => updateTodo({ ...todo, isDone: e.target.checked })}
        />
        <div
          className={clsx(
            'collapse w-full',
            !isDone && description && 'collapse-arrow'
          )}
        >
          <input type="checkbox" />
          <p
            className={clsx(
              'collapse-title font-semibold',
              isDone ? 'text-gray-600 line-through' : 'text-base-content'
            )}
          >
            {title}
          </p>
          {!isDone && description && (
            <p className="collapse-content">{description}</p>
          )}
        </div>
      </div>

      <Button
        iconOnly
        isLoading={isLoading}
        icon={<TrashIcon className="w-4 text-red-500" />}
        className="btn-error btn-ghost mt-[6px]"
        onClick={() => deleteTodo(id)}
      />
    </div>
  )
}

export default TodoItem