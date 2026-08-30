import Hero from '../components/Hero'
import FeatureSection from '../components/FeatureSection'
import { Suspense } from 'react'

export default function Page(){
  return (
    <>
      <Hero />
      <div className="max-w-6xl mx-auto px-6">
        <FeatureSection />
        <section className="mt-16">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <div className="text-4xl font-bold text-gray-900/70">01</div>
              <h3 className="mt-3 font-semibold">Choose</h3>
              <p className="mt-2 text-sm text-gray-600">Choose the habits you want to build.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="text-4xl font-bold text-gray-900/70">02</div>
              <h3 className="mt-3 font-semibold">Track</h3>
              <p className="mt-2 text-sm text-gray-600">Check in every day and build your streak.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="text-4xl font-bold text-gray-900/70">03</div>
              <h3 className="mt-3 font-semibold">Transform</h3>
              <p className="mt-2 text-sm text-gray-600">Use your data to understand your progress and improve.</p>
            </div>
          </div>
        </section>
      </div>
      <div className="mt-24 bg-black text-white py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Small actions.<br/>Every single day.</h2>
          <p className="mt-4 text-gray-300">Your future is built from what you repeatedly do today.</p>
          <button className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-md">Start tracking for free →</button>
        </div>
      </div>
    </>
  )
}
