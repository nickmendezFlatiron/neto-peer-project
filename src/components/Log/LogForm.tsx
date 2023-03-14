import { LogFormRoot, FormWrapper, TextInput, NumberInput, FormButton } from "./LogForm.styles"
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
    <FormWrapper id="log-form">
      <label>
        Exercise 
        <TextInput 
          id="exercise"
          placeholder="Exercise name here..."
          type="text"
          />
      </label>
      <label>
        Weight 
        <NumberInput
          id="weight"
          type="number"
          min={0}
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