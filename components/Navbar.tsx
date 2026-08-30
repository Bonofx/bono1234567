import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold">HabitFlow</div>
          <nav className="hidden md:flex gap-6 ml-8">
            <Link href="#">Home</Link>
            <Link href="#features">Features</Link>
            <Link href="#how">How It Works</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#about">About</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-3">
            <Link href="/login" className="text-sm">Log in</Link>
            <Link href="/signup" className="bg-black text-white px-4 py-2 rounded-md text-sm">Sign up</Link>
          </div>
          <button className="md:hidden" aria-label="menu" onClick={() => setOpen(v=>!v)}>
            <Menu />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4">
          <nav className="flex flex-col gap-3">
            <Link href="#">Home</Link>
            <Link href="#features">Features</Link>
            <Link href="#how">How It Works</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#about">About</Link>
            <div className="flex gap-2 mt-2">
              <Link href="/login" className="text-sm">Log in</Link>
              <Link href="/signup" className="bg-black text-white px-3 py-2 rounded-md text-sm">Sign up</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
