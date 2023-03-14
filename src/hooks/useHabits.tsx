import {useQuery} from '@tanstack/react-query';
// import {Habit, Log} from "../App";

const fetchHabits = async () => {
  const res = await fetch("http://localhost:3000/habits?_embed=logs");
  if(!res.ok) {
    throw new Error("Fetch for Habits data failed")
  }
  return res.json()
}
const useHabits = () => {
<<<<<<< HEAD
  return useQuery({
    queryKey: ['habits'],
    queryFn: fetchHabits
  })
=======

return useQuery({
  queryKey: ['habits'],
  queryFn: fetchHabits
})
>>>>>>> 02d51e7 (removed type from useQuery)
}

export default useHabits;