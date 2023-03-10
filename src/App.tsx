import './App.css';
import useHabits from './hooks/useHabits';
export interface Habit {
  id: number,
  title: string,
  daysTracked: number,
  description: string,
  updated_at: string,
  reminderTime: string,
  dayCount: number
}

export interface Log {
  id: number, 
  habitId: number, 
  exercise: string,
  created_at: string,
  weight: number, 
  reps: number,
  sets: number, 
  total: number,
  completed: boolean
}

function App() {

  const {data} = useHabits()

  return (    
      <div className="App">
      Hello World
      </div>
  );
}

export default App;
