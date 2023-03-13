import { Habit } from "../../App"
import { HabitCardRoot } from "./HabitCard.styles"

// id: number,
// title: string,
// daysTracked: number,
// description: string,
// updated_at: string,
// reminderTime: string,
// dayCount: number,
// logs: Log[]

interface HabitCardProps {
  habit: Habit,
  key: string
}
const HabitCard = ({habit}: HabitCardProps) => {
  
  const {title, daysTracked , dayCount,   } = habit as {title: string , daysTracked: number, dayCount: number}
  const daysLeft =  daysTracked - dayCount


  return (
    
    <HabitCardRoot>
      <h2>{title}</h2>
      <p>{daysLeft} days to go</p>
    </HabitCardRoot>
  )
}

export default HabitCard