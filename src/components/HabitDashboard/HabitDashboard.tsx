import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Habit, Log } from '../../types';
import { useNavigate } from 'react-router-dom';
import LogForm from '../Log/LogForm';

function HabitDashboard() {
const [habit, setHabit] = useState<Habit | null>(null)
const [isFormOpen, toggleFormOpen] = useState(false)
const {id} = useParams()
const navigate = useNavigate()

const renderLogs = habit?.logs.map((log: Log) => {
  return <p key={log.created_at}>{log.exercise}</p>
})

useEffect(()=>{
  fetch(`http://localhost:3000/habits/${id}?_embed=logs`)
  .then(r => r.json())
  .then(habit => {
    console.log(habit)
    setHabit(habit) 
  }
  )
},[])


 if (!habit) return <h1>Loading...</h1>
 
    return (
      <div className="HabitDashboard">
        <div className="habitContainer">
          <p className="habitName">{habit?.title}</p>
          <p className="habitTimeline">{habit?.daysTracked}</p>
        </div>
        {renderLogs}
        <button onClick={()=> toggleFormOpen(!isFormOpen)}>New Log</button>
        {isFormOpen? <LogForm /> : null}
      </div>
    );
  }
  
  
  export default HabitDashboard;