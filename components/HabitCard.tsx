'use client'
import { useEffect, useState } from 'react'
import { Habit, loadHabits, saveHabits } from '../lib/habitData'
import { todayISO } from '../lib/utils'

export default function HabitCard({ habit, onToggle }: { habit: Habit, onToggle: (id:string)=>void }){
  const isDone = habit.completedDates.includes(todayISO())
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-between">
      <div>
        <div className="font-semibold">{habit.name}</div>
        <div className="text-sm text-gray-500">{habit.description}</div>
      </div>
      <button onClick={() => onToggle(habit.id)} aria-pressed={isDone} className={`w-10 h-10 rounded-md flex items-center justify-center transition ${isDone ? 'bg-green-600 text-white' : 'border'}`}>
        {isDone ? '✓' : '○'}
      </button>
    </div>
  )
}
