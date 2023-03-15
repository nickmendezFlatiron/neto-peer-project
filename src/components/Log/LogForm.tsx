import { LogFormRoot, FormWrapper, TextInput, NumberInput, FormButton } from "./LogForm.styles"
import { useFormik } from "formik"
import * as Yup from 'yup'
import { Log } from "../../types"
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

  const formik = useFormik({initialValues: {
    exercise: '',
    weight: 0,
    reps: 0,
    sets: 0
  } ,  onSubmit: (values) => {
    alert(JSON.stringify(values, null, 2));
  }})

return  (
  <LogFormRoot>
    <FormWrapper id="log-form">
      <label>
        Exercise 
        <TextInput 
          id="exercise"
          placeholder="Exercise name here..."
          type="text"
          // value={formik.initialValues.exercise}
          onChange={formik.handleChange}
          />
      </label>
      <label>
        Weight 
        <NumberInput
          id="weight"
          type="number"
          min={0}
          // value={formik.initialValues.weight}
          onChange={formik.handleChange}
          />
      </label>
      <label>
        Reps 
        <NumberInput
          id="weight"
          type="number"
          min={0}
        />
      </label>
      <label>
        Sets
        <NumberInput
          id="weight"
          type="number"
          min={0}
          // value={formik.initialValues.sets}
          onChange={formik.handleChange}
        />
      </label>
    </FormWrapper>
  </LogFormRoot>
)
}

export default LogForm