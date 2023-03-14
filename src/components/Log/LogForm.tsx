import { LogFormRoot, FormWrapper } from "./LogForm.styles"

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
      
    </FormWrapper>
  </LogFormRoot>
)
}

export default LogForm