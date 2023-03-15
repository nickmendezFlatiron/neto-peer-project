// import React, { useState } from 'react';
// import HabitsContainer from '../HabitsContainer';
// import NewHabitForm from '../NewHabitForm';
import { Habit } from '../../types';

// export interface Habit {
// id: number,
// title: string,
// daysTracked: number,
// description: string,
// updated_at: string,
// reminderTime: string,
// dayCount: number,
// logs: Log[]
// }

function HabitDashboard(props: { data: Habit }) {
    const { data } = props;
    console.log(data)
  
  
    return (
      <div className="HabitDashboard">
        <div className="habitContainer">
          <p className="habitName">[habit.title]</p>
          <p className="habitTimeline">[habit.daysTracked]</p>
        </div>
  
        {/* {habits.log.map((dayLog) => {
            // log each day
        })} */}
        
        {/* <LogHabitForm /> */}
      </div>
    );
  }
  
  
  export default HabitDashboard;