import { LogFormRoot, FormWrapper, TextInput, NumberInput, FormButton } from "./LogForm.styles"
import usePostLogs from "../../hooks/usePostLogs"

import { useFormik } from "formik"
import * as Yup from 'yup'
import { Log } from "../../App"
// {
//   "exercise": "Squats",
//   "weight": 50,
//   "reps": 10,
//   "sets": 3,
// }

// id: number, 
// exercise: string,
// created_at: string,
// weight: number, 
// reps: number,
// habitId: number, 
// sets: number, 
// total: number,
// completed: boolean


const LogForm = () => {
  const submitLogMutation = usePostLogs()

  const formik = useFormik({initialValues: {
    exercise: '',
    weight: 0,
    reps: 0,
    sets: 0
  } ,  onSubmit: (values) => {
    const { reps, weight, sets} = values
    const total = reps * weight * sets

    const logData = {
      ...values,
      habitId: 0,
      total,
      created_at: Date.now().toString(),
      completed: true
      
    }
    submitLogMutation.mutate(logData)
  }})

return  (
  <LogFormRoot>
    <FormWrapper id="log-form" onSubmit={formik.handleSubmit}>
      <label>
        Exercise 
        <TextInput 
          id="exercise"
          placeholder="Exercise name here..."
          type="text"
          onChange={formik.handleChange}
          />
      </label>
      <label>
        Weight 
        <NumberInput
          id="weight"
          type="number"
          min={0}
          onChange={formik.handleChange}
          />
      </label>
      <label>
        Reps 
        <NumberInput
          id="reps"
          type="number"
          min={0}
          // value={formik.initialValues.reps}
          onChange={formik.handleChange}
        />
      </label>
      <label>
        Sets
        <NumberInput
          id="sets"
          type="number"
          min={0}
          onChange={formik.handleChange}
        />
      </label>
      <FormButton
        form="log-form"
        type="submit"
      >Submit</FormButton>
    </FormWrapper>
  </LogFormRoot>
)
}

export default LogForm