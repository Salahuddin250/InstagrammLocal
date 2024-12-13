import { useSelector } from "react-redux";
import cls from "./ProfileInfo.module.scss";
import { getAuthData } from "@/entities/User";
import { type FC, useEffect, useState, useCallback } from "react";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { Avatar, Button, HStack, Text, VStack } from "@/shared/ui";
import { type User } from "@/entities/User/model/types/user";
import {
  getProfileUserLoading,
  getProfileUser,
  profileActions,
  EditProfile,
  FollowEnum
} from "@/entities/Profile";
import { Modal, Spin } from "antd";
import { FollowBtn } from "@/features";
import { FollowModal } from "../FollowModal/FollowModal";

interface ProfileInfoProps {
  id: string
  users: User[]
}
interface FollowModalTypes {
  isOpen: boolean
  view?: FollowEnum
}

export const ProfileInfo: FC<ProfileInfoProps> = ({ id, users }) => {
  const dispatch = useAppDispatch();

  const authData = useSelector(getAuthData);
  const userLoading = useSelector(getProfileUserLoading);
  const user = useSelector(getProfileUser);

  const [isOpen, setIsOpen] = useState<boolean>();
  const [isFollowModal, setIsFollowModal] = useState<FollowModalTypes>({
    isOpen: false,
    view: FollowEnum.FOLLOWERS
  });

  const onOpen = () => {
    setIsOpen(true);
    dispatch(profileActions.setClearMessage());
  };
  const onClose = () => {
    setIsOpen(false);
  };
  const onOpenFollowModal = useCallback(() => {
    setIsFollowModal({
      isOpen: true,
      view:
        isFollowModal.view === FollowEnum.FOLLOWERS
          ? FollowEnum.FOLLOWING
          : FollowEnum.FOLLOWERS
    });
  }, [isFollowModal]);
  const onCloseFollowModal = useCallback(() => {
    setIsFollowModal({ isOpen: false, view: isFollowModal.view });
  }, [isFollowModal]);

  useEffect(() => {
    if (authData?._id === id) {
      dispatch(profileActions.setProfileUser(authData));
    } else {
      const newUser = users.find((user) => user._id === id);
      if (newUser) dispatch(profileActions.setProfileUser(newUser));
    }
  }, [id, authData, users]);

  if (userLoading) {
    return (
      <HStack justify="center">
        <Spin size="large" />
      </HStack>
    );
  }

  return (
    <HStack>
      {user && (
        <HStack className={cls.profileCont}>
          <Avatar size={180} src={user?.avatar} />

          <VStack gap={22} className={cls.profileInfo} align="start">
            <HStack>
              <VStack>
                <Text fw={600} size={24}>
                  0
                </Text>
                <Text fw={400} size={16} color="default">
                  Posts
                </Text>
              </VStack>
              <VStack className={cls.follow} onClick={onOpenFollowModal}>
                <Text fw={600} size={24}>
                  {user.followers.length}
                </Text>
                <Text fw={400} size={16} color="default">
                  Followers
                </Text>
              </VStack>
              <VStack className={cls.follow} onClick={onOpenFollowModal}>
                <Text fw={600} size={24}>
                  {user.following.length}
                </Text>
                <Text fw={400} size={16} color="default">
                  Following
                </Text>
              </VStack>
              {authData?._id === id
                ? (
                <Button
                  onClick={onOpen}
                  variant="outline"
                  padding={15}
                  max={true}
                >
                  Изменить профиль
                </Button>
                  )
                : (
                <FollowBtn id={id} user={user} />
                  )}
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
                <FollowModal data={isFollowModal.view === FollowEnum.FOLLOWERS
                  ? user.followers
                  : user.following}/>
              </Modal>
              <Modal
                footer={false}
                centered
                open={isOpen}
                title={
                  <Text size={16} color="default">
                    EditProfile
                  </Text>
                }
                onCancel={onClose}
              >
                <EditProfile onClose={onClose} auth={authData} />
              </Modal>
            </HStack>
            <VStack gap={8} className={cls.profileBottom}>
              <VStack gap={4} align="start">
                <Text fw={600} size={24}>
                  {user?.fullname}
                </Text>
                <Text size={14} fw={600} color="error">
                  @{user.username}
                </Text>
                <Text size={14} fw={600}>
                  {user.mobile}
                </Text>
                <Text size={14} fw={600}>
                  {user.address}
                </Text>
                <Text size={16} fw={400}>
                  {user.story}
                </Text>
              </VStack>
            </VStack>
          </VStack>
        </HStack>
      )}
    </HStack>
  );
};
