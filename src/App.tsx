// import { useState, useEffect } from 'react';
import './App.css';
import UserDashboard from './components/UserDashboard/UserDashboard';
import useHabits from './hooks/useHabits';
export interface Habit {
  id: number;
  title: string;
  daysTracked: number;
  description: string;
  updated_at: string;
  reminderTime: string;
  dayCount: number;
  logs: Log[];
}
export interface Log {
  id: number;
  habitId: number;
  exercise: string;
  created_at: string;
  weight: number;
  reps: number;
  sets: number;
  total: number;
  completed: boolean;
}

function App() {
  // const [habits, setHabits] = useState([]);
  const { data } = useHabits();

  // useEffect(() => {
  //   const { data } = useHabits;
  //   // console.log(data)
  //   // data.length ? setHabits(data) : null;
  // }, []);

  return (    
    <div className="App">
      <UserDashboard data={data} />
    </div>
  );
}

export default App;
