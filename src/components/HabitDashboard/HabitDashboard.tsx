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
  const tempDate = new Date('2020-04-20T11:00:00.000Z');
  const [prevDay, setPrevDay] = useState<Date | number>(tempDate)
  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(()=>{
    fetch(`http://localhost:3000/habits/${id}?_embed=logs`)
    .then(resp => resp.json())
    .then(habit => setHabit(habit))
  },[id])

  const isDayAfter = (dayBefore:string, currentDay:string): boolean => {
    const yesterday = new Date(dayBefore);
    const today = new Date(currentDay);
    const nextDay = new Date(dayBefore);
    nextDay.setDate(nextDay.getDate() + 1);
    
    const isSameDay = today.getFullYear() === nextDay.getFullYear() &&
      today.getMonth() === nextDay.getMonth() &&
      today.getDate() === nextDay.getDate();
    
    if(isSameDay && (yesterday < today)) return true;
    return false;
  }
  
  const renderLogs = habit?.logs.map((log: Log, idx) => {
    console.log(`log date: ${log.created_at}, typeof: ${typeof log.created_at}`);
    const day = new Date(log.created_at)//.toISOString();
    console.log(`day: ${day}, typeof: ${typeof day}`);
    if(idx === 0) {
      // new Date(day.setDate(day))
      setPrevDay(day.setDate(day.getDate() - 1))
    } else {
      // setPrevDay(new Date(log.created_at))
      setPrevDay(day)
    }

    // checks if prevDay < log.created (current day) 
    const isNextDay = isDayAfter(prevDay, log.created_at);
    if(!log.completed || !isNextDay) return(<tr className="missed" key={log.id}><td>Day {log.exercise}</td><td>-</td><td>-</td><td>-</td></tr>)
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
                  <th>Day</th>
                  <th>Weight (lbs)</th>
                  <th>Sets</th>
                  {/* <th>Reps</th> */}
                  <th>{}</th>
                </tr>
              </thead>
              <tbody>
                {renderLogs}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <Button onClick={()=> toggleFormOpen(!isFormOpen)}>+ New Log</Button>
      {isFormOpen ? <LogForm /> : null}
    </HabitDashboardRoot>
  );
  }
  
  
  export default HabitDashboard;