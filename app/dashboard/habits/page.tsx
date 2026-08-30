'use client'
import { useEffect, useState } from 'react'
import { Habit, loadHabits, saveHabits } from '../../lib/habitData'
import HabitCard from '../../components/HabitCard'
import { uid, todayISO } from '../../lib/utils'

export default function Page(){
  const [habits, setHabits] = useState<Habit[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const h = loadHabits()
    setHabits(h)
    setLoading(false)
  },[])

  useEffect(()=>{
    if(!loading) saveHabits(habits)
  },[habits, loading])

  function toggle(id:string){
    const date = todayISO()
    setHabits(prev => prev.map(h => {
      if(h.id !== id) return h
      const exists = h.completedDates.includes(date)
      const completedDates = exists ? h.completedDates.filter(d=>d!==date) : [...h.completedDates, date]
      const currentStreak = exists ? Math.max(0, h.currentStreak - 1) : h.currentStreak + 1
      const longestStreak = Math.max(h.longestStreak, currentStreak)
      return {...h, completedDates, currentStreak, longestStreak}
    }))
  }

  function addDummy(){
    const n:Habit = { id: uid('h_'), name: 'New Habit', description: 'Describe', category: 'Personal', frequency: 'Daily', completedDates: [], currentStreak:0, longestStreak:0, createdAt: new Date().toISOString() }
    setHabits(p=>[n,...p])
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Habits</h1>
        <div className="flex gap-2">
          <button className="px-3 py-2 border rounded" onClick={addDummy}>Add habit</button>
          <button className="px-3 py-2 bg-black text-white rounded">Import</button>
        </div>
      </div>
      <div className="mt-6 grid gap-3">
        {habits.map(h => <HabitCard key={h.id} habit={h} onToggle={toggle} />)}
      </div>
    </div>
  )
}
