import { useTranslation } from 'react-i18next'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { H1 } from '@/components'
import { ListCreateForm, ListGrid } from '@/features'
import { TopHeading } from '@/layouts'

export default function Home() {
  const { t } = useTranslation('home')

  return (
    <>
      <Head>
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
      </Head>

      <TopHeading>
        <H1>{t('title')}</H1>
      </TopHeading>

      <ListCreateForm />
      <ListGrid />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'home'])),
  },
})
