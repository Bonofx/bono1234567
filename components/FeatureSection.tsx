'use client'
import { CheckCircle, Flame, BarChart } from 'lucide-react'

export default function FeatureSection(){
  const features = [
    {title: 'Track with ease', desc: 'Add habits in seconds and track them daily with a beautiful interface.', icon: <CheckCircle/>},
    {title: 'Streaks that motivate', desc: 'See your progress, maintain streaks and stay motivated every day.', icon: <Flame/>},
    {title: 'Insights that help', desc: 'Powerful analytics to understand your patterns and progress over time.', icon: <BarChart/>},
  ]
  return (
    <section id="features" className="mt-12">
      <h2 className="text-3xl font-bold">Everything you need<br/>to build lasting habits.</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f)=> (
          <div key={f.title} className="p-6 border rounded-lg hover:shadow-md transition">
            <div className="text-brand-green w-10 h-10 flex items-center justify-center bg-white/5 rounded-md">{f.icon}</div>
            <h3 className="mt-4 font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
