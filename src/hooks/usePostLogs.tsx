import { QueryCache, useMutation } from "@tanstack/react-query";
import { Habit, Log } from "../types";
import { useQueryClient } from "@tanstack/react-query";
import { FetchError } from "../types";
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

    const res = await fetch("http://localhost:3000/logs", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

   if (!res.ok) {
    throw new Error("Failed to create new log.");
   }

   return res.json()
};

const usePostLogs = (setHabit: React.Dispatch<React.SetStateAction<Habit | null>>, habit: Habit) => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: postLogData,
    onSuccess: (data: Log) => {
      client.invalidateQueries(['habits'])
      setHabit({...habit, logs: [...habit.logs , data]})
      debugger
    }, onError: (error: FetchError) => {
      console.error(error);
      return { message: error.message };
    },
  });
};

export default usePostLogs