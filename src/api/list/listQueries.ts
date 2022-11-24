import { useMutation, useQuery, useQueryClient } from 'react-query'
import { AxiosError } from 'axios'
import { ListCreateBody } from '@/types'
import * as todoServices from './listServices'

const keys = {
  lists: ['lists'] as const,
  list: (id = '') => [...keys.lists, id] as const,
}

export const useGetLists = () => {
  return useQuery(keys.lists, () => todoServices.fetchLists(), {
    onError: (error: AxiosError) => {
      console.error('error', error)
    },
  })
}

export const useGetList = (id?: string) => {
  return useQuery(keys.list(id), () => todoServices.fetchList(id), {
    onError: (error: AxiosError) => {
      console.error('error', error)
    },
    enabled: !!id,
  })
}

export const useCreateList = () => {
  const queryClient = useQueryClient()

  return useMutation(
    (newList: ListCreateBody) => todoServices.createList(newList),
    {
      onError: (error: AxiosError) => {
        console.error('error', error)
      },
      onSuccess: () => {
        return queryClient.invalidateQueries(keys.lists)
      },
    }
  )
}

export const useDeleteList = () => {
  const queryClient = useQueryClient()

  return useMutation((id: string) => todoServices.deleteList(id), {
    onError: (error: AxiosError) => {
      console.error('error', error)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(keys.lists)
    },
  })
}
