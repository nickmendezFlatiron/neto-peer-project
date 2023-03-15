import {useMutation} from '@tanstack/react-query'
import { Log } from '../types'
interface LogData {
exercise: string,
created_at: string,
weight: number, 
reps: number,
habitId: number, 
sets: number, 
total: number,
completed: boolean
}

const postLogData = async (data: LogData): Promise<Log> => {
  const res = await fetch('http://localhost:3000/logs', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  return res.json()
}

const usePostLogs = () => {
 return useMutation({
    mutationFn: postLogData, 
    onSuccess: (data) => {console.log(data)}
  })
 
}


export default usePostLogs