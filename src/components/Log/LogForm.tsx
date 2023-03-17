import {
  FormRoot,
  FormWrapper,
  TextInput,
  NumberInput,
  FormButton,
} from "./LogForm.styles";
import { useFormik } from "formik";
import usePostLogs from "../../hooks/usePostLogs";
import * as Yup from "yup";
import { Habit, Log } from "../../types";

interface LogFormInputs {
  exercise: string;
  weight: number;
  reps: number;
  sets: number;
}

const LogForm = (props: {
  id: number;
  habit: Habit;
  setHabit: React.Dispatch<React.SetStateAction<Habit | null>>;
}) => {
  const { id: selectedHabit, setHabit, habit } = props;
  const submitLogMutation = usePostLogs(setHabit, habit);

  const LogSchema = Yup.object().shape({
    exercise: Yup.string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    weight: Yup.number().min(0).required("Required"),
    reps: Yup.number().min(0).required("Required"),
    sets: Yup.number().min(0).required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      exercise: "",
      weight: 0,
      reps: 0,
      sets: 0,
    },
    validationSchema: LogSchema,
    onSubmit: async (values) => {
      const { reps, weight, sets } = values;
      const total = reps * weight * sets;

      const logData = {
        ...values,
        habitId: selectedHabit,
        total,
        created_at: Date.now().toString(),
        completed: true,
      };

      submitLogMutation.mutate(logData);
      formik.resetForm()
    },
  });

    
  return (
    <FormRoot>
      <FormWrapper id="log-form" onSubmit={formik.handleSubmit}>
        <label>
          Exercise
          <TextInput
            id="exercise"
            placeholder="Exercise name here..."
            type="text"
            onChange={formik.handleChange}
            value={formik.values.exercise}
            maxLength={30}
          />
        </label>
        <label>
          Weight
          <NumberInput
            id="weight"
            type="number"
            min={0}
            onChange={formik.handleChange}
            value={formik.values.weight}
          />
        </label>
        <label>
          Reps
          <NumberInput
            id="reps"
            type="number"
            min={0}
            onChange={formik.handleChange}
            value={formik.values.reps}
          />
        </label>
        <label>
          Sets
          <NumberInput
            id="sets"
            type="number"
            min={0}
            onChange={formik.handleChange}
            value={formik.values.sets}
          />
        </label>
        <FormButton form="log-form" type="submit">
          Create Log
        </FormButton>
      </FormWrapper>
    </FormRoot>
  );
};

export default LogForm;
