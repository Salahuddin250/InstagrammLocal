import { type RegisterFormValues, useRegisterForm } from "../../model/schema/useRegisterForm";
import { getAuthError, getAuthLoading, registerByEmail } from "../../";
import cls from "./RegisterForm.module.scss";
import {
  AppLink,
  Button,
  HStack,
  Input,
  Text,
  VStack,
  Form
} from "@/shared/ui";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const { register, watch, errors, isValid, RegisterFormNames, handleSubmit } =
    useRegisterForm();

  const dispatch = useAppDispatch()

  const authError = useSelector(getAuthError)

  const authLoading = useSelector(getAuthLoading)

  const navigate = useNavigate()

  const onSubmit = async (data: RegisterFormValues) => {
    const res = await dispatch(registerByEmail(data))
    if (res.meta.requestStatus === "fulfilled") {
      navigate("/login")
    }
  }

  return (
    <HStack className={cls.cont} justify="center">
      <VStack gap={22} className={cls.auth}>
        <VStack gap={26} className={cls.authTop}>
          <Text className={cls.title} fw={600} size={24} color="red">
            Регистрация
          </Text>
          {authError && <Text fw={500} size={14} color="error">{authError}</Text>}
          <Form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
            <VStack align="center" gap={18}>
              <Input
                {...register(RegisterFormNames.EMAIL)}
                type="text"
                value={watch(RegisterFormNames.EMAIL)}
                error={errors?.email?.message}
                className={cls.input}
                placeholder="Ваша почта*"
              />
              <Input
                {...register(RegisterFormNames.FULLNAME)}
                type="text"
                value={watch(RegisterFormNames.FULLNAME)}
                error={errors?.fullname?.message}
                className={cls.input}
                placeholder="Имя и фамилия*"
              />
              <Input
                {...register(RegisterFormNames.USERNAME)}
                type="text"
                value={watch(RegisterFormNames.USERNAME)}
                error={errors?.username?.message}
                className={cls.input}
                placeholder="Имя пользователя*"
              />
              <Input
                {...register(RegisterFormNames.PASSWORD)}
                type="password"
                value={watch(RegisterFormNames.PASSWORD)}
                error={errors?.password?.message}
                className={cls.input}
                placeholder="Пароль*"
              />
              <Input
                {...register(RegisterFormNames.CF_PASSWOD)}
                type="password"
                value={watch(RegisterFormNames.CF_PASSWOD)}
                error={errors?.cf_password?.message}
                className={cls.input}
                placeholder="Confirm password*"
              />
              <HStack align="center" justify="between">
                <HStack gap={8} className={cls.checkboxContainer}>
                  <input type="checkbox" className={cls.checkboxInput} />
                  <Text
                    fw={400}
                    size={12}
                    as="span"
                    className={cls.checkboxLabel}
                  >
                    Запомнить меня
                  </Text>
                </HStack>
              </HStack>
              <Button type="submit" disabled={!isValid && authLoading} className={cls.btn} max={true} loading={authLoading}>
                Регистрация
              </Button>

              <Text>Или</Text>
              <VStack gap={12}>
                <Button className={cls.btn} max variant="outline">
                  Войти через Facebook
                </Button>
              </VStack>
            </VStack>
          </Form>
        </VStack>
        <HStack justify="center" gap={4} className={cls.authBottom}>
          <Text fw={400} size={14} color="default" as="span">
            Уже есть аккаунт?{" "}
          </Text>
          <AppLink to="/login">
            <Text color="red">Вход</Text>
          </AppLink>
        </HStack>
      </VStack>
    </HStack>
  );
};
