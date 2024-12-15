import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export enum AddModalFormNames {
  CONTENT = "content",
}

interface AddModalFormValues {
  content: string
}

export const useAddModalFormSchema = () => {
  const schema = yup.object().shape({
    content: yup
      .string()
      .required("Поле не может быть пустым")
      .min(30, "Минимум 30 символов")
      .max(200, "Максимум 200 символов")
  });

  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { isValid, errors, isSubmitting }
  } = useForm<Partial<AddModalFormValues>>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      content: ""
    }
  });

  return { register, watch, reset, handleSubmit, isValid, errors, isSubmitting, AddModalFormNames }
};
