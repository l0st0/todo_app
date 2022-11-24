import axios from 'axios'

export const todoListApi = axios.create({
  baseURL: 'https://637b8af46f4024eac210d00d.mockapi.io/api/v1',
})
