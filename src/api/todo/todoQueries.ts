import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { AxiosError } from 'axios'
import { CreateTodoBody, Todo } from '@/types'
import * as todoServices from './todoServices'

const keys = {
  todos: (id = '') => ['todos', id] as const,
}

export const useGetTodos = (listId?: string) => {
  return useQuery(keys.todos(listId), () => todoServices.fetchTodos(listId), {
    onError: (error: AxiosError) => {
      console.error('error', error)
    },
    enabled: !!listId,
  })
}

export const useCreateTodo = (listId: string) => {
  const queryClient = useQueryClient()

  return useMutation(
    (newTodo: CreateTodoBody) => todoServices.createTodo(listId, newTodo),
    {
      onError: (error) => {
        console.error('error', error)
      },
      onSuccess: async () => {
        queryClient.invalidateQueries(keys.todos(listId))
      },
    }
  )
}

export const useDeleteTodo = (listId: string) => {
  const { t } = useTranslation()
  const queryClient = useQueryClient()

  return useMutation(
    (todoId: string) => todoServices.deleteTodo(listId, todoId),
    {
      onMutate: async (todoId) => {
        await queryClient.cancelQueries(keys.todos(listId))
        const previousTodos = queryClient.getQueryData(
          keys.todos(listId)
        ) as Todo[]
        const updatedTodos = previousTodos.filter((todo) => todo.id !== todoId)
        queryClient.setQueryData(keys.todos(listId), updatedTodos)
        return { previousTodos }
      },
      onError: (error, todoId, context) => {
        console.error('error', error)
        queryClient.setQueryData(keys.todos(listId), context?.previousTodos)
        toast.error(t('errors.remove_todo_error'))
      },
      onSettled: async () => {
        queryClient.invalidateQueries(keys.todos(listId))
      },
    }
  )
}

export const useUpdateTodo = (listId: string, todoId: string) => {
  const { t } = useTranslation()
  const queryClient = useQueryClient()

  return useMutation(
    (updatedTodo: Todo) => todoServices.updateTodo(listId, todoId, updatedTodo),
    {
      onMutate: async (updatedTodo) => {
        await queryClient.cancelQueries(keys.todos(listId))
        const previousTodos = queryClient.getQueryData(
          keys.todos(listId)
        ) as Todo[]
        const updatedTodos = previousTodos.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        )
        queryClient.setQueryData(keys.todos(listId), updatedTodos)
        return { previousTodos }
      },
      onError: (error, updatedTodo, context) => {
        console.error('error', error)
        queryClient.setQueryData(keys.todos(listId), context?.previousTodos)
        toast.error(t('errors.update_todo_error'))
      },
      onSettled: async () => {
        queryClient.invalidateQueries(keys.todos(listId))
      },
    }
  )
}
