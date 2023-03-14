import { LogFormRoot, FormWrapper, TextInput, NumberInput } from "./LogForm.styles"
import { useFormik } from "formik"
import * as Yup from 'yup'

// {
//   "exercise": "Squats",
//   "weight": 50,
//   "reps": 10,
//   "sets": 3,
// }

// id="firstName" 
// type="text"
// placeholder="first name here..."
// onChange={formik.handleChange}
// onBlur={formik.handleBlur}
// value={formik.values.firstName}


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
    <FormWrapper>
      <label>
        Exercise 
        <TextInput 
          id="exercise"
          placeholder="Exercise name here..."
          type="text"/>
      </label>
    </FormWrapper>
  </LogFormRoot>
)
}

export default LogForm