'use client'

import { FaCog, FaUser, FaSignOutAlt } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="w-full h-16 bg-black text-white flex items-center justify-between px-6 shadow-md">
      {/* Left: App name */}
      <h1 className="text-xl font-bold tracking-wide">Kanban Task Board</h1>

      {/* Right: Actions */}
      <div className="flex items-center space-x-6">
        <FaCog className="text-lg cursor-pointer hover:text-gray-300" title="Settings" />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">
          Sign out
        </button>
      </div>
    </header>
  )
}
