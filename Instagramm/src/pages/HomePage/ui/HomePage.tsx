import { useTranslation } from "react-i18next";
import cls from "./HomePage.module.scss";
import { AppLink, HStack, Text, UserCard, VStack } from "@/shared/ui";
import { FollowBtn, PostsList } from "@/features";
import { useSelector } from "react-redux";
import { getAuthData } from "@/entities/User";
import { FollowEnum, FollowModal, getProfileUser, getUserProfile, useProfileModal } from "@/entities/Profile";
import { Button, Modal } from "antd";

export const HomePage = () => {
  const { t } = useTranslation();
  const authData = useSelector(getAuthData);
  const user = useSelector(getProfileUser);
  const { onOpenFollowersModal, isFollowModal, onCloseFollowModal } =
    useProfileModal();

  return (
    <HStack align="start" className={cls.home}>
      {/* left */}

      <VStack className={cls.left} gap={40}>
        <div>Slider</div>

        <PostsList />
      </VStack>

      {/* left */}

      {/* right */}

      <VStack gap={36} className={cls.right}>
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
      </VStack>

      {/* right */}
    </HStack>
  );
};
