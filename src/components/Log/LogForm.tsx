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