'use client'
import { useEffect, useRef } from 'react'

export default function AnalyticsChart(){
  const ref = useRef<HTMLDivElement|null>(null)
  useEffect(()=>{
    // placeholder for animation trigger
  },[])
  return (
    <div className="p-4 border rounded-lg">
      <div className="flex items-center justify-between">
        <div className="font-semibold">Weekly completion rate</div>
        <div className="text-sm text-gray-500">87%</div>
      </div>
      <div className="mt-4 h-28 flex items-end gap-2" ref={ref}>
        {[80,100,60,90,100,70,90].map((v,i)=> (
          <div key={i} className="flex-1 bg-black/5 rounded-t" style={{height: `${v/1.5}%`}}></div>
        ))}
      </div>
    </div>
  )
}
