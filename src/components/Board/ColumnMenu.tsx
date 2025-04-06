'use client'

import { MoreHorizontal } from 'lucide-react'

export default function ColumnMenu() {
  return (
    <button
      className="text-gray-400 hover:text-gray-600"
      title="Column options"
    >
      <MoreHorizontal size={18} />
    </button>
  )
}
