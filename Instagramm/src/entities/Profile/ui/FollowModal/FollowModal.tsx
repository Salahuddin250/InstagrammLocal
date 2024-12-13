import { type User } from "@/entities/User/model/types/user";
import cls from "./FollowModal.module.scss";
import { type FC } from "react";
import { Text, UserCard, VStack } from "@/shared/ui";
import { FollowBtn } from "@/features";

interface FollowModalProps {
  data: User[]
}

export const FollowModal: FC<FollowModalProps> = ({ data }) => {
  return (
    <VStack gap={16}>
      {data.length > 0
        ? (
            data.map((user) => {
              return (
            <UserCard
              key={user._id}
              id={user._id}
              title={user.fullname}
              content={user.username}
              src={user.avatar}
            ><FollowBtn id={user._id} user={user}/></UserCard>
              );
            })
          )
        : (
        <div>Пусто</div>
          )}
    </VStack>
  );
};
