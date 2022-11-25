import React from 'react'
import { TrashIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { useDeleteTodo, useUpdateTodo } from '@/api'
import {
  Button,
  CheckBox,
  Collapse,
  CollapseDescription,
  CollapseTitle,
} from '@/components'
import { Todo } from '@/types'
import TodoDeadline from './TodoDeadline'

interface TodoItemProps extends Todo {}

const TodoItem = (todo: TodoItemProps) => {
  const { title, description, isDone, listId, id, deadline } = todo

  const { mutate: deleteTodo, isLoading } = useDeleteTodo(listId)
  const { mutate: updateTodo } = useUpdateTodo(listId, id)

  return (
    <div className="flex items-start justify-between border-b border-base-content">
      <div className="flex flex-1">
        <CheckBox
          className="mt-4.5"
          checked={isDone}
          onChange={(e) => updateTodo({ ...todo, isDone: e.target.checked })}
        />
        <Collapse displayArrow={!isDone && !!description}>
          <CollapseTitle
            className={clsx(
              'flex items-center justify-between gap-4',
              isDone ? 'text-gray-600 line-through' : 'text-base-content'
            )}
          >
            <span>{title}</span>
            {!isDone && <TodoDeadline deadline={deadline} />}
          </CollapseTitle>

          <CollapseDescription>{description}</CollapseDescription>
        </Collapse>
      </div>

      <Button
        iconOnly
        isLoading={isLoading}
        icon={<TrashIcon className="w-4 text-red-500" />}
        className="btn-error btn-ghost mt-1.5"
        onClick={() => deleteTodo(id)}
      />
    </div>
  )
}

export default TodoItem
