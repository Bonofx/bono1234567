'use client'
import HabitCalendar from '../../components/HabitCalendar'

export default function Page(){
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold">Calendar</h1>
      <div className="mt-6">
        <HabitCalendar />
      </div>
    </div>
  )
}
