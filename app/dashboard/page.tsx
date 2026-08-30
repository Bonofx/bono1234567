'use client'
import Link from 'next/link'

export default function Page(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-2 text-sm text-gray-600">Quick links</p>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-6 gap-3">
        <Link href="/dashboard/habits" className="p-3 border rounded">Habits</Link>
        <Link href="/dashboard/calendar" className="p-3 border rounded">Calendar</Link>
        <Link href="/dashboard/statistics" className="p-3 border rounded">Stats</Link>
        <Link href="/dashboard/goals" className="p-3 border rounded">Goals</Link>
        <Link href="/dashboard/settings" className="p-3 border rounded">Settings</Link>
      </div>
    </div>
  )
}
