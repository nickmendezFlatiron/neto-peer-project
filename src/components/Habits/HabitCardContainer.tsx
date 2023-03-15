import { HabitCardContainerRoot } from './HabitCardContainer.styles'
import { Habit } from '../../types';
import HabitCard from './HabitCard';
import useHabits from '../../hooks/useHabits';

// create interface for props
const HabitCardContainer = (props: { data: Habit[], isLoaded: boolean }) => {
  const { data, isLoaded } = props;
  // const {data, error, isError} = useHabits()
  if (!isLoaded) {
    return <span>Oops! Something Went Wrong!</span>
  }
  
  // const renderCards =  data?.map((habit: Habit) => <HabitCard key={habit.title} habit={habit}/>)
  

  return (
    <HabitCardContainerRoot>
      { data.map(habit => <HabitCard key={habit.title} habit={habit} /> }
    </HabitCardContainerRoot>  
  );
}

export default HabitCardContainer;