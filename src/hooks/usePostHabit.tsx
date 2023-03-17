import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Habit } from "../types";
import { FetchError } from "../types";

const usePostHabit = () => {
  const client = useQueryClient();

  const postNewHabit = async (newHabit: Partial<Habit>) => {
    const res = await fetch("http://localhost:3000/habits", {
      method: "POST",
      body: JSON.stringify(newHabit),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!res.ok) {
      throw new Error("Failed to create a new habit");
    }
    return res.json();
  };

  return useMutation({
    mutationFn: postNewHabit,
    onError: (error: FetchError) => {
      return { error: error.message };
    },
    onSuccess: (data: Habit) => {
      console.log(data)
      client.invalidateQueries(["habits"]);
    },
  });

};

export default usePostHabit;
