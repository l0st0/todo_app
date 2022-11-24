import React from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

interface ErrorMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  display: boolean
}

const ErrorMessage = ({
  children,
  className,
  display,
  ...rest
}: ErrorMessageProps) => {
  const { t } = useTranslation()

  return (
    <p
      {...rest}
      className={twMerge(
        'my-2 text-center text-error',
        !display && 'hidden',
        className
      )}
    >
      {children || t('errors.isError')}
    </p>
  )
}

export default ErrorMessage
