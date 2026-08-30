export type Habit = {
  id: string;
  name: string;
  description?: string;
  category?: string;
  frequency?: string;
  completedDates: string[];
  currentStreak: number;
  longestStreak: number;
  createdAt: string;
}

const sampleHabits: Habit[] = [
  {
    id: 'h1',
    name: 'Morning Exercise',
    description: '30 min workout',
    category: 'Fitness',
    frequency: 'Daily',
    completedDates: [new Date().toISOString().slice(0,10)],
    currentStreak: 3,
    longestStreak: 12,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'h2',
    name: 'Read 20 Pages',
    description: 'Personal growth',
    category: 'Reading',
    frequency: 'Daily',
    completedDates: [new Date().toISOString().slice(0,10)],
    currentStreak: 8,
    longestStreak: 20,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'h3',
    name: 'Drink 2L Water',
    description: 'Stay hydrated',
    category: 'Health',
    frequency: 'Daily',
    completedDates: [],
    currentStreak: 0,
    longestStreak: 15,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'h4',
    name: 'Meditate',
    description: '10 min meditation',
    category: 'Mindfulness',
    frequency: 'Daily',
    completedDates: [new Date().toISOString().slice(0,10)],
    currentStreak: 24,
    longestStreak: 30,
    createdAt: new Date().toISOString(),
  }
]

export function loadHabits(): Habit[]{
  try{
    const raw = localStorage.getItem('habitflow:habits');
    if(raw) return JSON.parse(raw) as Habit[];
  }catch(e){/* ignore */}
  return sampleHabits;
}

export function saveHabits(habits: Habit[]){
  try{ localStorage.setItem('habitflow:habits', JSON.stringify(habits)); }catch(e){}
}
