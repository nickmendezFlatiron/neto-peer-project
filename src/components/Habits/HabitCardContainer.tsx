import { HabitCardContainerRoot } from './HabitCardContainer.styles'
import { Habit } from '../../types';
import HabitCard from './HabitCard';

// create interface for props
const HabitCardContainer = (props: { data: Habit[] }) => {
  const { data } = props;
    

  return (
    <HabitCardContainerRoot>
      { data.map(habit => <HabitCard key={habit.title} habit={habit} /> )}
    </HabitCardContainerRoot>  
  );
}

export default HabitCardContainer;