'use client'

import { useState } from 'react'
import {
  FaHome, FaClock, FaSearch, FaCog, FaUsers, FaUserFriends,
  FaBoxOpen, FaExclamationCircle, FaExclamationTriangle,
  FaAngleDown, FaAngleUp, FaLayerGroup, FaPlay, FaVolumeUp
} from 'react-icons/fa'

const projects = [
  'Apollo', 'Beacon', 'Catalyst', 'Delta', 'Echo',
  'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliet'
]

const priorities = [
  { label: 'Urgent', icon: <FaExclamationCircle /> },
  { label: 'High', icon: <FaExclamationTriangle /> },
  { label: 'Medium', icon: <FaLayerGroup /> },
  { label: 'Low', icon: <FaAngleDown /> },
  { label: 'Backlog', icon: <FaBoxOpen /> },
]

export default function Sidebar() {
  const [showProjects, setShowProjects] = useState(true)
  const [showPriorities, setShowPriorities] = useState(true)

  return (
    <aside className="bg-black text-white w-64 h-screen flex flex-col justify-between p-4 shadow-xl">
      <div>
        <nav className="space-y-2">
          <SidebarItem icon={<FaHome />} label="Home" />
          <SidebarItem icon={<FaClock />} label="Timeline" />
          <SidebarItem icon={<FaSearch />} label="Search" active />
          <SidebarItem icon={<FaCog />} label="Settings" />
          <SidebarItem icon={<FaUsers />} label="Users" />
          <SidebarItem icon={<FaUserFriends />} label="Teams" />
        </nav>

        {/* Projects */}
        <SectionToggle
          title="Projects"
          open={showProjects}
          onToggle={() => setShowProjects(!showProjects)}
        />
        {showProjects && (
          <div className="pl-4 space-y-2 mt-2">
            {projects.map((project) => (
              <SidebarItem key={project} icon={<FaBoxOpen />} label={project} />
            ))}
          </div>
        )}

        {/* Priority */}
        <SectionToggle
          title="Priority"
          open={showPriorities}
          onToggle={() => setShowPriorities(!showPriorities)}
        />
        {showPriorities && (
          <div className="pl-4 space-y-2 mt-2">
            {priorities.map((p) => (
              <SidebarItem key={p.label} icon={p.icon} label={p.label} />
            ))}
          </div>
        )}
      </div>

      {/* Footer Controls */}
      <div className="flex items-center justify-between px-4 pt-4 border-t border-gray-700">
        <FaPlay className="text-sm" />
        <FaVolumeUp className="text-sm" />
      </div>
    </aside>
  )
}

function SidebarItem({
    icon,
    label,
    active = false
  }: {
    icon: React.ReactNode
    label: string
    active?: boolean
  }) {
    return (
      <div
        className={`flex items-center space-x-3 cursor-pointer px-3 py-2 rounded-md 
          ${active ? 'bg-gray-800' : 'hover:bg-gray-700 transition-colors'}`}
      >
        <span className="text-lg">{icon}</span>
        <span className="text-sm">{label}</span>
      </div>
    )
  }
  
  
  

function SectionToggle({
  title,
  open,
  onToggle
}: {
  title: string
  open: boolean
  onToggle: () => void
}) {
  return (
    <div
      className="flex items-center justify-between px-3 py-2 mt-4 text-gray-400 cursor-pointer hover:text-white transition-colors"
      onClick={onToggle}
    >
      <span className="uppercase text-xs font-semibold tracking-wide">{title}</span>
      {open ? <FaAngleUp /> : <FaAngleDown />}
    </div>
  )
}
