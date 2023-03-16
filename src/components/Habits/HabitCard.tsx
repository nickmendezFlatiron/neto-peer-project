import { Habit , Log} from "../../types"
import { HabitCardRoot } from "./HabitCard.styles"
import { useNavigate } from "react-router-dom"
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
  const navigate = useNavigate()
  const {title, daysTracked , dayCount,  id, logs  } = habit as {id:number , title: string , daysTracked: number, dayCount: number, logs: Log[] }
  const daysLeft =  daysTracked - dayCount

  const handleClick = () => {
    navigate(`/habit/${id}`)
    console.log("Card Clicked: ",id )
  }
  return (
    
    <HabitCardRoot onClick={handleClick}>
      <h2>{title}</h2>
      <p>{daysLeft} days to go</p>
    </HabitCardRoot>
  )
}

export default HabitCard