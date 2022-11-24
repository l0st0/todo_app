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
