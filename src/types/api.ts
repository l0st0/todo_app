export interface Todo {
  description?: string
  deadline?: Date
  id: string
  listId: string
  title: string
  done: boolean
  createdAt: Date
}

export interface List {
  id: string
  createdAt: Date
  name: string
  todos: Todo[]
}

export interface ListCreateBody {
  name: string
}

export interface TodoCreateBody {
  title: string
  description?: string
  deadline?: Date
}

export interface DeleteTodoParams {
  listId: string
  todoId: string
}
