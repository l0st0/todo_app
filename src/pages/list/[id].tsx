import React from 'react'
import { useTranslation } from 'react-i18next'
import Error from 'next/error'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import TodoCreateForm from 'src/features/todo/TodoCreateForm'
import { useGetList } from '@/api'
import { H1 } from '@/components'
import { BackButton, LoadingData, TodoList } from '@/features'
import { useRouterQuery } from '@/hooks'
import { TopHeading } from '@/layouts'

const Todo = () => {
  const { t } = useTranslation()
  const listId = useRouterQuery('id')

  const { data: list, isError, isLoading } = useGetList(listId)

  if (isLoading)
    return (
      <LoadingData className="h-screen justify-center">
        {t('list.loading_list')}...
      </LoadingData>
    )

  if (isError) return <Error statusCode={404} />

  return (
    <>
      <Head>
        <title>{`${list?.name || ''}`}</title>
        <meta name="description" content={`${list?.name || ''}`} />
      </Head>

      <TopHeading className="flex w-full justify-between">
        <div className="flex flex-col items-start gap-4">
          <BackButton />
          <H1>{list?.name}</H1>
        </div>
      </TopHeading>

      <TodoCreateForm listId={listId} />
      <TodoList listId={listId} />
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})

export default Todo
