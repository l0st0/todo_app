import { todoListApi } from '@/lib'
import { List, ListCreateBody } from '@/types'

export const fetchLists = async () => {
  const res = await todoListApi.get<List[]>('/list?sortBy=createdAt&order=desc')
  return res.data
}

export const fetchList = async (id = '') => {
  const res = await todoListApi.get<List>(`/list/${id}`)
  return res.data
}

export const createList = async (body: ListCreateBody) => {
  const res = await todoListApi.post('/list', {
    ...body,
    // mockapi throws random dates
    createdAt: new Date().getTime(),
  })
  return res.data
}

export const deleteList = async (id: string) => {
  const res = await todoListApi.delete(`/list/${id}`)
  return res.data
}
