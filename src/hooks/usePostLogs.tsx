import { useMutation } from "@tanstack/react-query";
import { Habit, Log } from "../types";
import { useQueryClient } from "@tanstack/react-query";
interface LogData {
  exercise: string;
  created_at: string;
  weight: number;
  reps: number;
  habitId: number;
  sets: number;
  total: number;
  completed: boolean;
}

const postLogData = async (data: LogData) => {
  try {
    const res = await fetch("http://localhost:3000/logs", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // if (!res.ok) {
    //  return alert("Error: Log was unsuccessfully created")
    // }
    if (res.ok) {
      return res.json();
    }
  } catch {}
};

const usePostLogs = () => {
  const client = useQueryClient({});

  return useMutation({
    mutationFn: postLogData,
    onSuccess: (data: Log) => {
      console.log("success");
      const allHabits: any = client.getQueryData(["habits"]);
      const findHabit = allHabits.find(
        (habit: Habit) => habit.id === data.habitId
      );
      findHabit.logs.push(data);
      return findHabit;
    },
    onError: () => {
      alert("Error: Log was unsuccessfully created");
    },
  });
};

export default usePostLogs