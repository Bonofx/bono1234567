import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <div className="font-bold">HabitFlow</div>
          <div className="mt-4 text-sm">Build habits. Transform your life.</div>
        </div>
        <div>
          <div className="font-semibold">Product</div>
          <ul className="mt-3 text-sm space-y-2">
            <li>Features</li>
            <li>Pricing</li>
            <li>Dashboard</li>
            <li>Updates</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-3 text-sm space-y-2">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Legal</div>
          <ul className="mt-3 text-sm space-y-2">
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-sm">© 2026 HabitFlow. All rights reserved.</div>
    </footer>
  )
}
