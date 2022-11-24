import { useMutation, useQuery, useQueryClient } from 'react-query'
import { AxiosError } from 'axios'
import { DeleteTodoParams, TodoCreateBody } from '@/types'
import * as todoServices from './todoServices'

const keys = {
  todos: (id = '') => ['todos', id] as const,
}

export const useGetTodos = (listId?: string) => {
  return useQuery(keys.todos(listId), () => todoServices.fetchTodos(), {
    onError: (error: AxiosError) => {
      console.error('error', error)
    },
    enabled: !!listId,
  })
}

export const useCreateTodo = (listId: string) => {
  const queryClient = useQueryClient()

  return useMutation(
    (newTodo: TodoCreateBody) => todoServices.createTodo(listId, newTodo),
    {
      onError: (error: AxiosError) => {
        console.error('error', error)
      },
      onSuccess: () => {
        return queryClient.invalidateQueries(keys.todos(listId))
      },
    }
  )
}

export const useDeleteTodo = (listId: string) => {
  const queryClient = useQueryClient()

  return useMutation(
    (params: DeleteTodoParams) => todoServices.deleteTodo(params),
    {
      onError: (error: AxiosError) => {
        console.error('error', error)
      },
      onSuccess: () => {
        queryClient.invalidateQueries(keys.todos(listId))
      },
    }
  )
}
