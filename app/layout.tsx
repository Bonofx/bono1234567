import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'HabitFlow — Build Better Habits',
  description: 'Track your habits, build streaks and become more consistent with HabitFlow.',
  openGraph: {
    title: 'HabitFlow — Build Better Habits',
    description: 'Track your habits, build streaks and become more consistent with HabitFlow.'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
