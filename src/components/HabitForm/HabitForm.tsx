import {
  FormWrapper,
  TextInput,
  NumberInput,
  TextAreaInput,
  FormButton,
  FormRoot,
  FormGroup,
} from "../Log/LogForm.styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Habit } from "../../types";
import usePostHabit from "../../hooks/usePostHabit";

const HabitForm = () => {
  const createHabit = usePostHabit();
  const HabitSchema = Yup.object().shape({
    title: Yup.string()
      .min(5, "Title is too short.")
      .max(40, "40-character limit")
      .required("Required"),
    description: Yup.string()
      .min(5, "Description is too short.")
      .max(200, "200-character limit.")
      .required("Required"),
    daysTracked: Yup.number().min(1).required("Required"),
    reminderTime: Yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      daysTracked: 1,
      reminderTime: "12:00",
    },
    validationSchema: HabitSchema,
    onSubmit: async (values: Partial<Habit>) => {
      const habitData = {
        ...values,
        updated_at: Date.now().toString(),
        dayCount: 1,
      };
      createHabit.mutate(habitData);
      formik.resetForm()
    },
  });
  const displayError = (input: "title" | "description") => {
    if (formik.errors[input] && formik.values[input] && formik.touched[input]) {
      return formik.errors[input];
    }
  };
  return (
    <FormRoot>
      <FormWrapper id="habit-form" onSubmit={formik.handleSubmit}>
        <label>
          Title
          <TextInput
            id="title"
            placeholder="Enter title here..."
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {displayError('title')}
        </label>
        <FormGroup>
          <label htmlFor="">
            Description
          </label>
            <TextAreaInput
              id="description"
              placeholder="What is your motivation?"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
        </FormGroup>
        <label>
          Days to Track
          <NumberInput
            id="daysTracked"
            type="number"
            min={1}
            onChange={formik.handleChange}
            value={formik.values.daysTracked}
          />
        </label>
        <label>
          Daily Reminder At:
          <NumberInput
            id="reminderTime"
            type="time"
            onChange={formik.handleChange}
            value={formik.values.reminderTime}
          />
        </label>
        <FormButton form="habit-form" type="submit">
          Create Habit
        </FormButton>
      </FormWrapper>
    </FormRoot>
  );
};

export default HabitForm;
