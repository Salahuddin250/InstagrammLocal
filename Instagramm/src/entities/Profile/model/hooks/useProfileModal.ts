import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { profileActions } from "../slice/profileSlice";
import { FollowEnum, type FollowModalTypes } from "../types/profile";
import { useCallback, useState } from "react";

export const useProfileModal = () => {
  const dispatch = useAppDispatch()

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
  const onOpenFollowersModal = useCallback(() => {
    setIsFollowModal({
      isOpen: true,
      view: FollowEnum.FOLLOWERS
    });
  }, [isFollowModal]);
  const onOpenFollowingModal = useCallback(() => {
    setIsFollowModal({
      isOpen: true,
      view: FollowEnum.FOLLOWING
    });
  }, [isFollowModal]);
  const onCloseFollowModal = useCallback(() => {
    setIsFollowModal({ isOpen: false, view: isFollowModal.view });
  }, [isFollowModal]);

  return {
    isOpen,
    isFollowModal,
    onOpen,
    onClose,
    onCloseFollowModal,
    onOpenFollowingModal,
    onOpenFollowersModal
  }
};
