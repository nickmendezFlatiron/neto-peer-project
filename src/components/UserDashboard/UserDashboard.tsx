// import React, { useState } from 'react';
// import HabitsContainer from '../HabitsContainer';
// import NewHabitForm from '../NewHabitForm';
import { Habit } from '../../types';
import HabitCardContainer from '../Habits/HabitCardContainer';


function UserDashboard(props: any) {
// function UserDashboard() {
  const { data, isLoaded } = props;


  return <h2>Hekk</h2>
  return (
    <div className="userDashboard">
      <div className="userContainer">
        <p className="userName">WHATUp PITA!</p>
        <p>data length: {data.length}</p>
      </div>

      <HabitCardContainer data={data} isLoaded={isLoaded} />

      {/* <NewHabitForm /> */}
    </div>
  );
}


export default UserDashboard;