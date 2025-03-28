'use client'

import React from 'react'
import Sidebar from '@/components/Sidebar/Sidebar'
import Header from '@/components/Header/Header'

const projects = [
  { id: 1, name: 'Apollo', owner: 'Laura Adams', status: 'Active' },
  { id: 2, name: 'Beacon', owner: 'Steve Jobs', status: 'Paused' },
  { id: 3, name: 'Catalyst', owner: 'Olivia Pace', status: 'Completed' },
  { id: 4, name: 'Delta', owner: 'Quincy Adams', status: 'Active' },
  { id: 5, name: 'Echo', owner: 'Ursula Monroe', status: 'Archived' }
]

const teams = [
  { id: 1, name: 'Quantum Innovations', productOwner: 'LauraAdams', projectManager: 'BobSmith' },
  { id: 2, name: 'Nebula Research', productOwner: 'OliviaPace', projectManager: 'DaveBrown' },
  { id: 3, name: 'Orion Solutions', productOwner: 'QuincyAdams', projectManager: 'FrankWright' },
  { id: 4, name: 'Krypton Developments', productOwner: 'SteveJobs', projectManager: 'HenryAllen' },
  { id: 5, name: 'Zenith Technologies', productOwner: 'UrsulaMonroe', projectManager: 'JohnDoe' }
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 bg-white">
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="p-8 space-y-12">
          {/* Projects Table */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Projects</h2>
            <div className="overflow-x-auto rounded shadow border border-gray-300 bg-white">
              <table className="min-w-full text-sm text-gray-900">
                <thead className="bg-gray-200 text-left text-gray-700">
                  <tr>
                    <th className="px-4 py-2">Project ID</th>
                    <th className="px-4 py-2">Project Name</th>
                    <th className="px-4 py-2">Owner</th>
                    <th className="px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-100">
                      <td className="px-4 py-2">{project.id}</td>
                      <td className="px-4 py-2">{project.name}</td>
                      <td className="px-4 py-2">{project.owner}</td>
                      <td className="px-4 py-2">{project.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Teams Table */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Teams</h2>
            <div className="overflow-x-auto rounded shadow border border-gray-300 bg-white">
              <table className="min-w-full text-sm text-gray-900">
                <thead className="bg-gray-200 text-left text-gray-700">
                  <tr>
                    <th className="px-4 py-2">Team ID</th>
                    <th className="px-4 py-2">Team Name</th>
                    <th className="px-4 py-2">Product Owner</th>
                    <th className="px-4 py-2">Project Manager</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map((team) => (
                    <tr key={team.id} className="hover:bg-gray-100">
                      <td className="px-4 py-2">{team.id}</td>
                      <td className="px-4 py-2">{team.name}</td>
                      <td className="px-4 py-2">{team.productOwner}</td>
                      <td className="px-4 py-2">{team.projectManager}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
