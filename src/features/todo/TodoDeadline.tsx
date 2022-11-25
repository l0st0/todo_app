import React from 'react'
import { useTranslation } from 'react-i18next'
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import { dateTimeLeft } from '@/utils'

interface TodoDeadlineProps {
  deadline?: Date
}

const TodoDeadline = ({ deadline }: TodoDeadlineProps) => {
  const { t } = useTranslation()

  const now = new Date().getTime()

  if (!deadline) return null

  if (now > new Date(deadline).getTime())
    return (
      <span className="flex gap-2">
        <ExclamationTriangleIcon className="w-4 text-warning" />
        {t('todo.after_deadline')}
      </span>
    )

  return <span>{dateTimeLeft(deadline)} left</span>
}

export default TodoDeadline
