'use client'
import GoalCard from '../../components/GoalCard'

export default function Page(){
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold">Goals</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <GoalCard title="Run 100km" progress={72} unit="km" />
        <GoalCard title="Read 12 Books" progress={58} unit="books" />
        <GoalCard title="Meditate for 30 Days" progress={80} unit="days" />
      </div>
    </div>
  )
}
