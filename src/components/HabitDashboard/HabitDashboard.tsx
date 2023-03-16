import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Habit, Log } from '../../types';
import LogForm from '../Log/LogForm';
import { useNavigate } from 'react-router-dom';

function HabitDashboard() {
const [habit, setHabit] = useState<Habit | null>(null)
const [isFormOpen, toggleFormOpen] = useState<boolean>(false)
const navigate = useNavigate()
const {id} = useParams()

const renderLogs = habit?.logs.map((log: Log) => {
  return <p key={log.created_at}>{log.exercise}</p>
})

useEffect(()=>{
  fetch(`http://localhost:3000/habits/${id}?_embed=logs`)
  .then(r => r.json())
  .then(habit => {
    setHabit(habit) 
  }
  )
},[id])


 if (!habit) return <h1>Loading...</h1>
 
    return (
      <div className="HabitDashboard">
        <button onClick={()=> navigate(-1)}>Back to Habits</button>
        <div className="habitContainer">
          <p className="habitName">{habit?.title}</p>
          <p className="habitTimeline">Day {habit?.dayCount} of {habit?.daysTracked}</p>
        </div>
        {renderLogs}
        <button onClick={()=> toggleFormOpen(!isFormOpen)}>New Log</button>
        {isFormOpen? <LogForm id={habit.id} habit={habit} setHabit={setHabit}/> : null}
      </div>
    );
  }
  
  
  export default HabitDashboard;