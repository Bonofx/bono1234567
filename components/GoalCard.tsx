'use client'

export default function GoalCard({ title, progress, unit }:{ title:string, progress:number, unit?:string }){
  return (
    <div className="p-4 border rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-gray-500">{progress}{unit ? ` / ${unit}` : ''}</div>
        </div>
        <div className="text-sm font-bold">{progress}%</div>
      </div>
      <div className="mt-3 bg-black/5 rounded-full h-2 overflow-hidden">
        <div className="bg-brand-green h-2 rounded-full" style={{width: `${progress}%`}} />
      </div>
    </div>
  )
}
