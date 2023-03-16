import { Habit } from '../../types';
import HabitCardContainer from '../Habits/HabitCardContainer';
import useHabits from '../../hooks/useHabits';
import { useState } from 'react';

function UserDashboard() {
  const [isFormOpen, toggleFormOpen] = useState<boolean>(false)
  const habits = useHabits()

  if (habits.isLoading) return <h1>Loading...</h1>
  
  return( 
    <div>
      <HabitCardContainer data={habits.data}/>
      <button onClick={()=> toggleFormOpen(!isFormOpen)}>New Habit</button>
      {isFormOpen ? <h3>Form Here...</h3> : null}
    </div>
  )
}


export default UserDashboard;