'use client'

import React, { useState } from 'react'

export default function AddTaskModal({
  isOpen,
  onClose,
  onAdd
}: {
  isOpen: boolean
  onClose: () => void
  onAdd: (task: any) => void
}) {
  const [form, setForm] = useState({
    name: '',
    description: '',
    createdBy: '',
    assignedTo: '',
    verifier: '',
    criteria: '',
    storyPoints: '',
    difficulty: '',
    attachments: ''
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value })
    setErrors({ ...errors, [field]: '' })
  }

  const handleSubmit = () => {
    const requiredFields = ['name', 'storyPoints', 'criteria', 'createdBy', 'difficulty']
    const newErrors: any = {}

    requiredFields.forEach((field) => {
      if (!form[field as keyof typeof form].trim()) {
        newErrors[field] = 'This field is required'
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    onAdd(form)
    setForm({
      name: '',
      description: '',
      createdBy: '',
      assignedTo: '',
      verifier: '',
      criteria: '',
      storyPoints: '',
      difficulty: '',
      attachments: ''
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg p-6 relative overflow-y-auto max-h-[90vh]">
        <button onClick={onClose} className="absolute top-3 right-4 text-xl font-bold text-gray-500">&times;</button>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Create New Task</h2>

        {[
          { label: 'Task Name', field: 'name' },
          { label: 'Description', field: 'description' },
          { label: 'Created By', field: 'createdBy' },
          { label: 'Assigned To', field: 'assignedTo' },
          { label: 'Verifier', field: 'verifier' },
          { label: 'Acceptance Criteria', field: 'criteria' },
          { label: 'Story Points', field: 'storyPoints' },
          { label: 'Level of Difficulty', field: 'difficulty' },
          { label: 'Attachments', field: 'attachments' }
        ].map(({ label, field }) => (
          <div key={field} className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {label}{['name', 'createdBy', 'criteria', 'storyPoints', 'difficulty'].includes(field) && ' *'}
            </label>
            <input
              type="text"
              value={form[field as keyof typeof form]}
              onChange={(e) => handleChange(field, e.target.value)}
              className={`w-full border rounded px-3 py-2 ${
                errors[field] ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring`}
            />
            {errors[field] && <p className="text-sm text-red-500 mt-1">{errors[field]}</p>}
          </div>
        ))}

        <button
          onClick={handleSubmit}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Task
        </button>
      </div>
    </div>
  )
}
