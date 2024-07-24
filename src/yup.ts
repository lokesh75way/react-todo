import * as yup from "yup";

export const taskSchema = yup.object().shape({
  id: yup.number().required(),
  name: yup.string().trim().nonNullable().required("Name is required"),
  description: yup
    .string()
    .trim()
    .nonNullable()
    .required("Description is required"),
  date: yup.string().nonNullable().required("Date is required"),
  status: yup.string().nonNullable().required("Status is required"),
  list: yup.number().nonNullable().required(),
});
