import axios from 'axios'
import { List, ListCreateBody } from '@/types'

const todoApi = axios.create({
  baseURL: 'https://637b8af46f4024eac210d00d.mockapi.io/api/v1',
})

export const fetchLists = async () => {
  const res = await todoApi.get<List[]>('/list?sortBy=createdAt&order=desc')
  return res.data
}

export const fetchList = async (id = '') => {
  const res = await todoApi.get<List>(`/list/${id}`)
  return res.data
}

export const createList = async (body: ListCreateBody) => {
  const res = await todoApi.post('/list', {
    ...body,
    // mockapi throws random dates
    createdAt: new Date().getTime(),
  })
  return res.data
}

export const deleteList = async (id: string) => {
  const res = await todoApi.delete(`/list/${id}`)
  return res.data
}
