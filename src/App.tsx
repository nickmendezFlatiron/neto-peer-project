import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
// import {useQuery} from '@tanstack/react-query';
import './App.css';
// import LogForm from './components/Log/LogForm';
import UserDashboard from './components/UserDashboard/UserDashboard';
// import useHabits from './hooks/useHabits';

// function App() {
const App = () => {
  const [habits, setHabits] = useState([]);
  const [hasHabitData, setHasHabitData] = useState(false);

  useEffect(() => {
    const getAllHabits = () => {
      return fetch("http://localhost:3000/habits?_embed=logs")
        .then(response => response.json())
        .then(json => setHabits(json))
        .then(() => setHasHabitData(true));
    }
    getAllHabits();
  }, []);

  // const { data, isLoading } = useHabits();
  console.log(habits)

  return (    
    <div className="App">
      <Outlet />
      { !hasHabitData 
          ? <div>LOADING...</div> 
          : <UserDashboard data={habits} isLoaded={hasHabitData}/> }
      {/* <LogForm /> */}
    </div>
  );
}

export default App;
