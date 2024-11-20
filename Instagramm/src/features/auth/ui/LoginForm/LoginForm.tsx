import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { type LoginFormValues, useLoginForm } from "../../model/schema/useLoginForm";
import { getAuthError, getAuthLoading, loginByEmail } from "@/features/auth";

import cls from "./LoginForm.module.scss";
import {
  AppLink,
  Button,
  HStack,
  Input,
  Text,
  VStack,
  Form
} from "@/shared/ui";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const { register, watch, handleSubmit, isValid, errors, LoginFormNames } = useLoginForm();

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const authError = useSelector(getAuthError)
  const authLoading = useSelector(getAuthLoading)

  const onSubmit = async (data: LoginFormValues) => {
    const res = await dispatch(loginByEmail(data))
    if (res.meta.requestStatus === "fulfilled") {
      navigate("/")
    }
  }

  return (
    <HStack className={cls.cont} justify="center">
      <VStack gap={22} className={cls.auth}>
        <VStack gap={26} className={cls.authTop}>
          <Text className={cls.title} fw={600} size={24} color="red">
            Вход
          </Text>
          <Form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
            <VStack align="center" gap={22}>
              {authError && <Text fw={500} size={14} color="error">{authError}</Text>}
              <Input
                {...register(LoginFormNames.EMAIL)}
                value={watch(LoginFormNames.EMAIL)}
                error={errors?.email?.message}
                type="text"
                className={cls.input}
                placeholder="Ваша почта*"
              />
              <Input
                {...register(LoginFormNames.PASSWORD)}
                value={watch(LoginFormNames.PASSWORD)}
                error={errors?.password?.message}

                type="password"
                className={cls.input}
                placeholder="Пароль*"
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
                <AppLink className={cls.link} to="/">
                  <Text fw={400} size={12} color="red">
                    Забыли пароль?
                  </Text>
                </AppLink>
              </HStack>
              <Button type="submit" disabled={!isValid && authLoading} className={cls.btn} max={true} loading={authLoading}>
                Войти
              </Button>

              <Text>Или</Text>
              <VStack gap={12}>
                <Button className={cls.btn} max variant="outline">
                  Войти через Google
                </Button>
                <Button className={cls.btn} max variant="outline">
                  Войти через Facebook
                </Button>
              </VStack>
            </VStack>
          </Form>
        </VStack>
        <HStack justify="center" gap={4} className={cls.authBottom}>
          <Text fw={400} size={14} color="default" as="span">
            Еще нет аккаунта?{" "}
          </Text>
          <AppLink to="/register">
            <Text color="red">Регистрация</Text>
          </AppLink>
        </HStack>
      </VStack>
    </HStack>
  );
};
