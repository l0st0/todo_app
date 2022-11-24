import { todoListApi } from '@/lib'
import { DeleteTodoParams, Todo, TodoCreateBody } from '@/types'

export const fetchTodos = async (id = '') => {
  const res = await todoListApi.get<Todo[]>(`/list/${id}/todo`)
  return res.data
}

export const createTodo = async (id = '', body: TodoCreateBody) => {
  const res = await todoListApi.post(`/list/${id}/todo`, {
    ...body,
    // mockapi throws random dates
    createdAt: new Date().getTime(),
  })
  return res.data
}

export const deleteTodo = async ({ listId, todoId }: DeleteTodoParams) => {
  const res = await todoListApi.delete(`/list/${listId}/todo/${todoId}`)
  return res.data
}
