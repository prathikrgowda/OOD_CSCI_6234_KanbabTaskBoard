'use client'

import React from 'react'
import { Draggable } from '@hello-pangea/dnd'
import CardMenu from './CardMenu'

export default function Card({ task, index }: any) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white border border-gray-300 rounded-lg p-3 shadow-sm flex justify-between items-start"
        >
          <p className="text-sm text-gray-700">{task.content}</p>
          <CardMenu />
        </div>
      )}
    </Draggable>
  )
}
