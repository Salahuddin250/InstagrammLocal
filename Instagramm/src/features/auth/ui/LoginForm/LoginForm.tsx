import { useLoginForm } from "../../model/schema/useLoginForm";
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

export const LoginForm = () => {
  const { register, watch, isValid, errors, LoginFormNames } = useLoginForm();

  return (
    <HStack className={cls.cont} justify="center">
      <VStack gap={22} className={cls.auth}>
        <VStack gap={26} className={cls.authTop}>
          <Text className={cls.title} fw={600} size={24} color="red">
            Вход
          </Text>
          <Form className={cls.form}>
            <VStack align="center" gap={22}>
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
              <Button className={cls.btn} max={true}>
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