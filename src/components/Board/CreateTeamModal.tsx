'use client'

import { useState } from 'react'
import Modal from '../Modal/Modal'

const dummyUsers = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank']

export default function CreateTeamModal({
  isOpen,
  onClose
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [teamName, setTeamName] = useState('')
  const [description, setDescription] = useState('')
  const [selectedMembers, setSelectedMembers] = useState<string[]>([])
  const [search, setSearch] = useState('')

  const filteredUsers = dummyUsers.filter(
    (u) => u.toLowerCase().includes(search.toLowerCase()) && !selectedMembers.includes(u)
  )

  const handleAddUser = (user: string) => {
    setSelectedMembers([...selectedMembers, user])
    setSearch('')
  }

  const handleRemoveUser = (user: string) => {
    setSelectedMembers(selectedMembers.filter((u) => u !== user))
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-semibold mb-4">Create New Team</h2>

      <input
        type="text"
        placeholder="Team Name"
        className="w-full mb-3 px-3 py-2 border rounded"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Search members"
        className="w-full mb-2 px-3 py-2 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex flex-wrap gap-2 mb-3">
        {filteredUsers.map((user) => (
          <span
            key={user}
            className="bg-gray-100 px-2 py-1 rounded cursor-pointer text-sm"
            onClick={() => handleAddUser(user)}
          >
            {user}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {selectedMembers.map((user) => (
          <span
            key={user}
            className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center"
          >
            {user}
            <button
              onClick={() => handleRemoveUser(user)}
              className="ml-2 text-xs font-bold text-red-500"
            >
              ×
            </button>
          </span>
        ))}
      </div>

      <textarea
        placeholder="Team Description"
        className="w-full mb-4 px-3 py-2 border rounded"
        rows={3}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
        Add Team
      </button>
    </Modal>
  )
}

