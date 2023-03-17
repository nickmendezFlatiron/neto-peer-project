import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { HabitDashboardRoot } from './HabitDashboard.styles';
import { Habit, Log } from '../../types';
import LogForm from '../Log/LogForm';
import { Button } from '../Button/Button.styles';

const HabitDashboard = () => {
  const [habit, setHabit] = useState<Habit | null>(null)
  const [isFormOpen, toggleFormOpen] = useState<boolean>(false)
  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(()=>{
    fetch(`http://localhost:3000/habits/${id}?_embed=logs`)
    .then(resp => resp.json())
    .then(habit => setHabit(habit))
  },[id])
  
  const renderLogs = habit?.logs.map((log: Log, idx) => {
    if(!log.completed) return(<tr className="missed" key={log.id}><td>{log.exercise}</td><td>-</td><td>-</td><td>-</td></tr>)
    return (<tr key={log.id}><td>Day {log.exercise}</td><td>{log.weight}</td><td>{log.sets}</td><td>{log.reps}</td></tr>)
  })

  if(!habit) return <h1>Loading...</h1>
  return (
    <HabitDashboardRoot>
      <Button className="backBtn" onClick={()=> navigate(-1)}>
        {`< Back to Habits`}
      </Button>
      
      <div className="habitContainer">
        <div className="habitName">
          <span className="habitHeader">Developing Habit: </span>
          <div className="habitInfo">{habit?.title}</div>
        </div>
        <div className="habitDesc">
          <span className="habitHeader">Habit Motivation:</span>
          <div className="habitInfo">{habit?.description}</div>
        </div>
        <div className="habitProgress">
          <span className="habitHeader">Habit Progress:</span>
          <div className="habitInfo">{habit?.dayCount} of {habit?.daysTracked} days completed</div>
        </div>
        <div className="habitLogs">
          <span className="habitHeader">Habit Log:</span>
          <div className="habitInfo">
            <table>
              <thead>
                <tr>
                  <th>Exercise</th>
                  <th>Weight (lbs)</th>
                  <th>Sets</th>
                  <th>Reps</th>
                </tr>
              </thead>
              <tbody>
                {renderLogs}
              </tbody>
            </table>
          </div>
        </div>
      <Button onClick={()=> toggleFormOpen(!isFormOpen)}>+ New Log</Button>
      {isFormOpen ? <LogForm id={habit.id} habit={habit} setHabit={setHabit}/> : null}
      </div>
      
    </HabitDashboardRoot>
  );
}

export default HabitDashboard;