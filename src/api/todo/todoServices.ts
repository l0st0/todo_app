import { todoListApi } from '@/lib'
import { CreateTodoBody, Todo } from '@/types'

export const fetchTodos = async (id = '') => {
  const res = await todoListApi.get<Todo[]>(
    `/list/${id}/todo?sortBy=createdAt&order=desc`
  )
  return res.data
}

export const createTodo = async (id = '', body: CreateTodoBody) => {
  const res = await todoListApi.post(`/list/${id}/todo`, {
    ...body,
    // mockapi throws random dates
    createdAt: new Date(),
    deadline: body.deadline || null,
  })
  return res.data
}

export const deleteTodo = async (listId: string, todoId: string) => {
  const res = await todoListApi.delete(`/list/${listId}/todo/${todoId}`)
  return res.data
}

export const updateTodo = async (
  listId: string,
  todoId: string,
  body: Todo
) => {
  const res = await todoListApi.put(`/list/${listId}/todo/${todoId}`, body)
  return res.data
}
