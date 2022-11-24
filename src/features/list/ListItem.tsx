import React from 'react'
import Link from 'next/link'
import { List } from '@/types'
import { dateTimeAgo } from '@/utils'

interface ListItemProps extends List {}

const ListItem = ({ id, name, createdAt }: ListItemProps) => {
  return (
    <Link legacyBehavior href={`link/${id}`}>
      <div className="flex cursor-pointer flex-col justify-center gap-2 rounded-lg border border-base-content px-12 py-4">
        <p className="truncate font-semibold">{name}</p>
        <p className="text-sm">{dateTimeAgo(createdAt)}</p>
      </div>
    </Link>
  )
}

export default ListItem
