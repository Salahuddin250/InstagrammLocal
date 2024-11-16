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

export const RegisterForm = () => {
  return (
    <HStack className={cls.cont} justify="center">
      <VStack gap={22} className={cls.auth}>
        <VStack gap={26} className={cls.authTop}>
          <Text className={cls.title} fw={600} size={24} color="red">
            Регистрация
          </Text>
          <Form className={cls.form}>
            <VStack align="center" gap={18}>
              <Input
                type="email"
                value=""
                className={cls.input}
                placeholder="Ваша почта*"
              />
                            <Input
                type="text"
                value=""
                className={cls.input}
                placeholder="Имя и фамилия*"
              />
                            <Input
                type="text"
                value=""
                className={cls.input}
                placeholder="Имя пользователя*"
              />
              <Input
                type="password"
                value=""
                className={cls.input}
                placeholder="Пароль*"
              />
              <Input
                type="password"
                value=""
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
              <Button className={cls.btn} max={true}>
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
