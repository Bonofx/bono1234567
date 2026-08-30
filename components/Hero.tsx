'use client'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

export default function Hero(){
  const [showHow, setShowHow] = useState(false)
  return (
    <section className="relative">
      <div className="h-[520px] bg-black relative flex items-center">
        <div className="absolute inset-0">
          <img src="/hero.svg" alt="hero" className="w-full h-full object-cover brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 text-white z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl font-extrabold leading-tight">Build habits.<br/>Transform your life.</h1>
              <p className="mt-4 text-lg text-white/80">HabitFlow helps you track your habits, stay consistent and become the best version of yourself.</p>
              <div className="mt-6 flex items-center gap-4">
                <button className="bg-white text-black px-5 py-3 rounded-md font-medium">Start tracking for free →</button>
                <button onClick={() => setShowHow(s=>!s)} className="flex items-center gap-2 text-white/90 px-4 py-2 border rounded-md">See how it works <ChevronRight size={14}/></button>
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-white/80">
                <div className="flex -space-x-2">
                  <img src="https://i.pravatar.cc/40?u=1" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://i.pravatar.cc/40?u=2" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://i.pravatar.cc/40?u=3" className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
                <div>★★★★★</div>
                <div>Join 10,000+ people building better habits.</div>
              </div>
            </div>
            <div className="hidden md:block">
              {/* Dashboard preview mockup */}
              <div className="bg-[#0b0b0b] rounded-2xl p-4 text-white shadow-xl w-[520px]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/80">Good morning, Bono 👋</div>
                    <div className="text-xs text-white/60">Let's build some amazing habits today.</div>
                  </div>
                  <div className="text-xs text-white/70">Overview</div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white/6 rounded-lg">
                    <div className="text-xs text-white/80">Total Habits</div>
                    <div className="text-2xl font-bold">6</div>
                  </div>
                  <div className="p-3 bg-white/6 rounded-lg">
                    <div className="text-xs text-white/80">Day Streak</div>
                    <div className="text-2xl font-bold">23</div>
                  </div>
                  <div className="p-3 bg-white/6 rounded-lg">
                    <div className="text-xs text-white/80">Success Rate</div>
                    <div className="text-2xl font-bold">87%</div>
                  </div>
                  <div className="p-3 bg-white/6 rounded-lg">
                    <div className="text-xs text-white/80">Total Completions</div>
                    <div className="text-2xl font-bold">156</div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-xs text-white/80">Today's Habits</div>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white">✓</div>
                      <div className="flex-1 text-sm">Morning Exercise<span className="text-xs text-white/70 block">30 min workout</span></div>
                      <div className="text-xs text-white/70">Completed</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white">✓</div>
                      <div className="flex-1 text-sm">Read 20 Pages<span className="text-xs text-white/70 block">Personal growth</span></div>
                      <div className="text-xs text-white/70">Completed</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white">○</div>
                      <div className="flex-1 text-sm">Drink 2L Water<span className="text-xs text-white/70 block">Stay hydrated</span></div>
                      <div className="text-xs text-white/70">In progress</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
