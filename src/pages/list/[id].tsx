import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import TodoCreateForm from 'src/features/todo/TodoCreateForm'
import { useGetList } from '@/api'
import { H1 } from '@/components'
import { BackButton, TodoList } from '@/features'
import { useRouterQuery } from '@/hooks'
import { TopHeading } from '@/layouts'

const Todo = () => {
  const listId = useRouterQuery('id')

  const { data: list } = useGetList(listId)

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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})

export default Todo
