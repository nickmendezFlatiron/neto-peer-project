import { HabitCardContainerRoot } from './HabitCardContainer.styles'
import { Habit } from '../../App'
import HabitCard from './HabitCard';
import useHabits from '../../hooks/useHabits';

const HabitCardContainer = () => {
  const {data, error, isError} = useHabits()
  if (isError) {
    return <span>Something Went Wrong.</span>
  }
  
  const renderCards =  data?.map((habit: Habit) => <HabitCard key={habit.title} habit={habit}/>)
  

return (
  <HabitCardContainerRoot>
    {renderCards}
  </HabitCardContainerRoot>  
)
}

export default HabitCardContainer