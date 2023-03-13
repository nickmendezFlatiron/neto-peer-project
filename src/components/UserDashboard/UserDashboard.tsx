// import React, { useState } from 'react';
// import HabitsContainer from '../HabitsContainer';
// import NewHabitForm from '../NewHabitForm';
// import { Habit } from '../../App';

function UserDashboard(props: { data: any }) {
  const { data } = props;
  console.log(data)


  return (
    <div className="userDashboard">
      <div className="userContainer">
        <p className="userName">Hello [user.name]!</p>
      </div>

      {/* <HabitsContainer data={data} />
      <NewHabitForm /> */}
    </div>
  );
}


export default UserDashboard;