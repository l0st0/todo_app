export interface Todo {
  description?: string
  deadline?: Date
  id: string
  listId: string
  title: string
  isDone: boolean
  createdAt: Date
}

export interface List {
  id: string
  createdAt: Date
  name: string
  todos: Todo[]
}

export interface CreateListBody {
  name: string
}

export interface CreateTodoBody {
  title: string
  description?: string
  deadline?: Date
  isDone?: boolean
}
