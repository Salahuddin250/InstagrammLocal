import { AppLink, HStack, Text, UserCard, VStack } from "@/shared/ui";
import cls from "./HomeSuggestions.module.scss";
import { type User } from "@/entities/User/model/types/user";
import { type FC } from "react";
import { type HomeUserProps } from "../../model/types/home";

export const HomeSuggestions: FC<HomeUserProps> = ({ authData }) => {
  return (
    <VStack gap={16}>
      <HStack justify="between">
        <Text fw={500} size={16}>
          Предложения
        </Text>
        <AppLink to="/">
          <Text color="red" fw={500} size={16}>
            Просмотреть все
          </Text>
        </AppLink>
      </HStack>

      <VStack gap={4}>
        {[1, 3, 4].map((item, index) => {
          return (
            <UserCard
              className={cls.recomend_usercard}
              key={index}
              size={39}
              src={authData?.avatar}
              id={authData?._id}
              title={authData?.fullname}
              content={`@${authData?.username}`}
            >
              {/* <FollowBtn user={user} id={user?._id}></FollowBtn> */}
            </UserCard>
          );
        })}
      </VStack>
    </VStack>
  );
};
