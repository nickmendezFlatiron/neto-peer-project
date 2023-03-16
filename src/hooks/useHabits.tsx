import { useQuery } from "@tanstack/react-query";
import { Habit } from "../types";
// import {Habit, Log} from "../App";
interface Error {
  message: string;
}

const fetchHabits = async () => {
  const res = await fetch("http://localhost:3000/habits?_embed=logs");

  if (!res.ok) {
    throw new Error("Failed to fetch habits");
  }
  const data = await res.json();
  return data;
};
const useHabits = () => {
  return useQuery<Habit[], Error>({
    queryKey: ["habits"],
    queryFn: fetchHabits,
    onError: (error) => {
      console.error(error);
      return { message: error.message };
    },
  });
};

export default useHabits;
