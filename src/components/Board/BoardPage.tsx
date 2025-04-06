'use client'

import { useState } from 'react'
import { DragDropContext, DropResult } from '@hello-pangea/dnd'
import { v4 as uuidv4 } from 'uuid'
import Column from './Column'
import Sidebar from '@/components/Sidebar/Sidebar'
import Header from '@/components/Header/Header'
import AddColumnModal from '@/components/Modals/AddColumnModal'
import AddTaskModal from '@/components/Modals/AddTaskModal'

interface Task {
  id: string
  content: string
}

interface ColumnType {
  id: string
  title: string
  taskIds: string[]
}

interface BoardData {
  tasks: Record<string, Task>
  columns: Record<string, ColumnType>
  columnOrder: string[]
}

const initialData: BoardData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Research competitors' },
    'task-2': { id: 'task-2', content: 'Create wireframes' },
    'task-3': { id: 'task-3', content: 'Develop homepage' },
    'task-4': { id: 'task-4', content: 'Review content strategy' }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2']
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: ['task-3']
    },
    'column-3': {
      id: 'column-3',
      title: 'Review',
      taskIds: ['task-4']
    }
  },
  columnOrder: ['column-1', 'column-2', 'column-3']
}

export default function BoardPage() {
  const [data, setData] = useState<BoardData>(initialData)
  const [isColumnModalOpen, setIsColumnModalOpen] = useState(false)
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false)

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result
    if (!destination) return

    const start = data.columns[source.droppableId]
    const end = data.columns[destination.droppableId]

    if (start === end) {
      const newTaskIds = [...start.taskIds]
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = { ...start, taskIds: newTaskIds }

      setData({
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn
        }
      })
    } else {
      const startTaskIds = [...start.taskIds]
      const endTaskIds = [...end.taskIds]

      startTaskIds.splice(source.index, 1)
      endTaskIds.splice(destination.index, 0, draggableId)

      setData({
        ...data,
        columns: {
          ...data.columns,
          [start.id]: { ...start, taskIds: startTaskIds },
          [end.id]: { ...end, taskIds: endTaskIds }
        }
      })
    }
  }

  const handleAddColumn = (title: string) => {
    const id = uuidv4()
    const newColumn: ColumnType = {
      id,
      title,
      taskIds: []
    }

    setData({
      ...data,
      columns: {
        ...data.columns,
        [id]: newColumn
      },
      columnOrder: [...data.columnOrder, id]
    })
    setIsColumnModalOpen(false)
  }

  return (
    <div className="relative min-h-screen flex bg-gray-50">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <div className="sticky top-0 z-10">
          <Header />
        </div>

        <main className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Kanban Board</h1>
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {data.columnOrder.map((columnId) => {
                const column = data.columns[columnId]
                const tasks = column.taskIds.map((taskId) => data.tasks[taskId])
                return <Column key={column.id} column={column} tasks={tasks} />
              })}

              <button
                onClick={() => setIsColumnModalOpen(true)}
                className="min-w-[250px] h-[200px] bg-white border-2 border-dashed border-gray-300 flex items-center justify-center rounded-xl text-gray-500 hover:border-gray-400 hover:bg-gray-100"
              >
                + Add Column
              </button>
            </div>
          </DragDropContext>
        </main>
      </div>

      {/* Modals */}
      <AddColumnModal
        isOpen={isColumnModalOpen}
        onClose={() => setIsColumnModalOpen(false)}
        onAdd={handleAddColumn}
      />
      <AddTaskModal
        isOpen={isTaskModalOpen}
        onClose={() => setIsTaskModalOpen(false)}
        onAdd={(taskData) => console.log(taskData)} // You can replace with logic to add task to state
      />
    </div>
  )
}
