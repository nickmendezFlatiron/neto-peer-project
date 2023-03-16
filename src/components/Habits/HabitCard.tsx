import { Habit} from "../../types"
import { HabitCardRoot } from "./HabitCard.styles"
import { useNavigate } from "react-router-dom"

interface HabitCardProps {
  habit: Habit,
  key: string,
}
const HabitCard = ({habit}: HabitCardProps) => {
  const navigate = useNavigate()
  const {title, daysTracked , dayCount,  id}: Partial<Habit> = habit 
  const daysLeft =  daysTracked - dayCount

  return (
    
    <HabitCardRoot onClick={()=> navigate(`/habits/${id}`)}>
      <h2>{title}</h2>
      <p>{daysLeft} days to go</p>
    </HabitCardRoot>
  )
}

export default HabitCard