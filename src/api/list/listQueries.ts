import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { AxiosError } from 'axios'
import { CreateListBody, List } from '@/types'
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
    (newList: CreateListBody) => todoServices.createList(newList),
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
  const { t } = useTranslation()
  const queryClient = useQueryClient()

  return useMutation((id: string) => todoServices.deleteList(id), {
    onMutate: async (id) => {
      await queryClient.cancelQueries(keys.lists)
      const previousLists = queryClient.getQueryData(keys.lists) as List[]
      const updatedLists = previousLists.filter((list) => list.id !== id)
      queryClient.setQueryData(keys.lists, updatedLists)
      return { previousLists }
    },
    onError: (error, id, context) => {
      console.error('error', error)
      queryClient.setQueryData(keys.lists, context?.previousLists)
      toast.error(t('errors.remove_list_error'))
    },
    onSettled: async () => {
      queryClient.invalidateQueries(keys.lists)
    },
  })
}
