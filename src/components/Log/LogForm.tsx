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
    <FormWrapper id="log-form" onSubmit={formik.handleSubmit}>
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
          // value={formik.initialValues.sets}
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