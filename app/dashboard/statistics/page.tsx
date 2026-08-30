'use client'
import AnalyticsChart from '../../components/AnalyticsChart'
import ProgressRing from '../../components/ProgressRing'

export default function Page(){
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <h1 className="text-2xl font-bold">Statistics</h1>
        <div className="mt-6 space-y-4">
          <AnalyticsChart />
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">Longest streak<div className="text-2xl font-bold">45</div></div>
            <div className="p-4 border rounded-lg">Current streak<div className="text-2xl font-bold">23</div></div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Habit Progress</h2>
        <div className="mt-4 flex items-center justify-center p-6 bg-white rounded-lg">
          <ProgressRing percent={87} />
        </div>
      </div>
    </div>
  )
}
