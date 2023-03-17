import {
  FormWrapper,
  TextInput,
  NumberInput,
  TextAreaInput,
  FormButton,
  FormRoot,
} from "../Log/LogForm.styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Habit } from "../../types";
import usePostHabit from "../../hooks/usePostHabit";

const HabitForm = () => {
  const createHabit = usePostHabit()
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      daysTracked: 0,
      reminderTime: "12:00",
    },
    onSubmit: async (values: Partial<Habit>) => {
      const habitData = {
        ...values,
        updated_at: Date.now().toString(),
        dayCount: 1
      }
      createHabit.mutate(habitData)
    },
  });

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
        </label>
        <label>
          Description
          <TextAreaInput
            id="description"
            placeholder="What is your motivation?"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </label>
        <label>
          Days to Track
          <NumberInput
            id="daysTracked"
            type="number"
            min={0}
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
