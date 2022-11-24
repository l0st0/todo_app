import React from 'react'
import { Fredoka_One, Open_Sans } from '@next/font/google'
import clsx from 'clsx'

interface RootLayoutProps extends React.PropsWithChildren {}

const fredoka_one = Fredoka_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-fredoka_one',
})

const open_sans = Open_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-open_sans',
})

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <main
      className={clsx(
        'mx-auto flex w-full max-w-4xl flex-col items-center px-4 font-open_sans',
        fredoka_one.variable,
        open_sans.variable
      )}
    >
      {children}
    </main>
  )
}

export default RootLayout
