'use client'
import { useEffect, useRef } from 'react'

export default function ProgressRing({ percent = 0 }: { percent?: number }){
  const r = 48
  const c = 2*Math.PI*r
  const stroke = Math.max(2, (100 - percent)/10 + 8)
  const offset = c - (percent/100)*c
  const circleRef = useRef<SVGCircleElement | null>(null)
  useEffect(()=>{
    if(circleRef.current){
      circleRef.current.style.transition = 'stroke-dashoffset 900ms cubic-bezier(.2,.9,.2,1)'
    }
  },[])
  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      <circle cx="60" cy="60" r={r} stroke="#111" strokeWidth={stroke} fill="none" />
      <circle ref={circleRef} cx="60" cy="60" r={r} stroke="var(--brand-green)" strokeWidth={stroke} fill="none"
        strokeDasharray={`${c} ${c}`} strokeDashoffset={offset} strokeLinecap="round" transform="rotate(-90 60 60)" />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="18" fill="#111">{percent}%</text>
    </svg>
  )
}
