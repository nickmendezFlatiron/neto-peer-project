// import React, { useState } from 'react';
// import HabitsContainer from '../HabitsContainer';
// import NewHabitForm from '../NewHabitForm';
import { Habit } from '../../App';
import HabitCardContainer from '../Habits/HabitCardContainer';


function UserDashboard(props: { data: Habit[] }) {
  const { data } = props;
  // console.log(data)


  return (
    <div className="userDashboard">
      <div className="userContainer">
        <p className="userName">Hello [user name]!</p>
      </div>

      <HabitCardContainer data={data} />

      {/* <NewHabitForm /> */}
    </div>
  );
}


export default UserDashboard;