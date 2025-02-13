import { FollowEnum, FollowModal, useProfileModal } from "@/entities/Profile";
import { HStack, Text, UserCard } from "@/shared/ui";
import { Button, Modal } from "antd";
import cls from "./HomeUserCard.module.scss";
import { type User } from "@/entities/User/model/types/user";
import { type FC } from "react";
import { type HomeUserProps } from "../../model/types/home";

export const HomeUserCard: FC<HomeUserProps> = ({ authData }) => {
  const { onOpenFollowersModal, isFollowModal, onCloseFollowModal } =
    useProfileModal();

  return (
    <HStack className={cls.usercard}>
      <UserCard
        size={50}
        src={authData?.avatar}
        id={authData?._id}
        title={authData?.fullname}
        content={`@${authData?.username}`}
      >
        <Button type="link" className={cls.followers}>
          <Text
            align="right"
            onClick={onOpenFollowersModal}
            size={14}
            fw={500}
            color="error"
          >
            {authData?.followers.length} followers
          </Text>
        </Button>

        {/* FollowModal */}

        <Modal
          footer={false}
          centered
          open={isFollowModal.isOpen}
          title={
            <Text size={16} color="default">
              {isFollowModal.view === FollowEnum.FOLLOWERS
                ? "Подписчики"
                : "Подписки"}
            </Text>
          }
          onCancel={onCloseFollowModal}
        >
          <FollowModal data={authData?.followers} />
        </Modal>

        {/* FollowModal */}
      </UserCard>
    </HStack>
  );
};
