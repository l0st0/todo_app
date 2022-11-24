import { useRouter } from 'next/router'

const useRouterQuery = (param: string) => {
  const { query } = useRouter()
  return query[param] as string
}

export default useRouterQuery
