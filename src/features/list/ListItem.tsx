import React from 'react'
import Link from 'next/link'
import { TrashIcon } from '@heroicons/react/24/solid'
import { useDeleteList } from '@/api'
import { Button } from '@/components'
import { List } from '@/types'
import { dateTimeAgo } from '@/utils'

interface ListItemProps extends List {}

const ListItem = ({ id, name, createdAt, todos }: ListItemProps) => {
  const { mutate: deleteList, isLoading } = useDeleteList()

  const onDeleteList = () => deleteList(id)

  return (
    <div className="flex justify-between gap-2 rounded-lg border border-base-content p-4">
      <Link legacyBehavior href={`list/${id}`}>
        <div className="flex w-full cursor-pointer flex-col gap-1 overflow-hidden">
          <p className="truncate font-semibold">{name}</p>
          <p className="text-sm">{dateTimeAgo(createdAt)}</p>
        </div>
      </Link>
      <Button
        onClick={onDeleteList}
        className="btn-ghost"
        icon={<TrashIcon className="w-4 text-red-500" />}
        iconOnly
        isLoading={isLoading}
      />
    </div>
  )
}

export default ListItem
