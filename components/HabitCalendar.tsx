'use client'
import { useState } from 'react'
import { formatMonthYear } from '../lib/utils'

export default function HabitCalendar(){
  const [date] = useState(new Date())
  return (
    <div className="p-4 border rounded-lg">
      <div className="flex items-center justify-between">
        <div className="font-semibold">{formatMonthYear(date)}</div>
        <div className="flex gap-2">
          <button className="px-2 py-1 border rounded">‹</button>
          <button className="px-2 py-1 border rounded">›</button>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-7 gap-2 text-sm text-center">
        {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d=> <div key={d} className="text-xs text-gray-500">{d}</div>)}
        {Array.from({length: 35}).map((_,i) => (
          <div key={i} className="p-2">
            <div className="w-8 h-8 mx-auto rounded-full flex items-center justify-center">{(i%30)+1}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
