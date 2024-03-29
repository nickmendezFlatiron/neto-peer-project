import HabitForm from '../HabitForm/HabitForm';
import { UserDashboardRoot } from './UserDashboard.styles'
import HabitCardContainer from '../Habits/HabitCardContainer';
import useHabits from '../../hooks/useHabits';
import { useState } from 'react';
import { Button } from '../Button/Button.styles';

function UserDashboard() {
  const [isFormOpen, toggleFormOpen] = useState<boolean>(false)
  const {isLoading, isError, error, data} = useHabits()

  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h2>{error.message}</h2>
  return( 
    <UserDashboardRoot>
      <h1>Welcome back!</h1>
      <h2>Let's continue developing those new habits</h2>
      <HabitCardContainer data={data}/>
      <Button onClick={()=> toggleFormOpen(!isFormOpen)}>+ New Habit</Button>
      {isFormOpen ? <HabitForm /> : null}
    </UserDashboardRoot>
  )
}


export default UserDashboard;