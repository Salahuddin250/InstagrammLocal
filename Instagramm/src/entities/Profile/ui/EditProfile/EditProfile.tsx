import { Avatar, Form, Input, Text, VStack } from "@/shared/ui";
import cls from "./EditProfile.module.scss";
import { type User } from "@/entities/User/model/types/user";
import { useState, type ChangeEvent, type FC } from "react";
import { useEditProfileForm } from "../../model/schema/useEditProfileForm";
import { Button } from "antd";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { updateProfile } from "../../model/service/updateProfile";
import { useSelector } from "react-redux";
import { getProfileSucces } from "../../model/selectors/getProfileSucces";
import { getProfileError } from "../../model/selectors/getProfileError";

interface EditProfileProps {
  auth: User
  onClose: () => void
}

export const EditProfile: FC<EditProfileProps> = ({ auth, onClose }) => {
  const { register, watch, errors, handleSubmit, isValid, EditProfileNames, isSubmitting } =
    useEditProfileForm(auth);

  const [avatar, setAvatar] = useState(null)
  const dispatch = useAppDispatch()
  const succesMessage = useSelector(getProfileSucces)
  const errorMessage = useSelector(getProfileError)

  const onChangeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0]

    if (file) {
      setAvatar(file)
    }
  }

  const onRemoveAvatar = () => {
    setAvatar(null)
  }

  const onSubmit = async (data: User) => {
    if (!isValid) return;

    await dispatch(updateProfile({ user: data, avatar }))
    setAvatar(null)
    // onClose()
  }

  return (
    <VStack gap={40}>
      <VStack max={false} className={cls.editProfile} gap={8}>
        <label className={cls.avatar} htmlFor="avatarFile">
          <Avatar src={avatar ? URL.createObjectURL(avatar) : auth?.avatar} size={142} />
        <input type="file" id="avatarFile" onChange={onChangeAvatar} />
        </label>
        {avatar && <Button onClick={onRemoveAvatar}>Очистить</Button>}
      </VStack>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <VStack className={cls.box} align="start" gap={26}>
        <Input
          placeholder={EditProfileNames.FULLNAME}
          {...register(EditProfileNames.FULLNAME)}
          value={watch(EditProfileNames.FULLNAME)}
          error={errors?.fullname?.message}
        />
        <Input
          placeholder={EditProfileNames.MOBILE}
          {...register(EditProfileNames.MOBILE)}
          value={watch(EditProfileNames.MOBILE)}
          error={errors?.mobile?.message}
        />{" "}
        <Input
          placeholder={EditProfileNames.ADDRESS}
          {...register(EditProfileNames.ADDRESS)}
          value={watch(EditProfileNames.ADDRESS)}
          error={errors?.address?.message}
        />{" "}
        <Input
          placeholder={EditProfileNames.WEBSITE}
          {...register(EditProfileNames.WEBSITE)}
          value={watch(EditProfileNames.WEBSITE)}
          error={errors?.website?.message}
        />{" "}
        <Input
          placeholder={EditProfileNames.STORY}
          {...register(EditProfileNames.STORY)}
          value={watch(EditProfileNames.STORY)}
          error={errors?.story?.message}
        />

        {succesMessage && <Text color="red">{succesMessage}</Text>}
        {errorMessage && <Text color="red">{errorMessage}</Text>}

        <Button style={{ padding: 20 }} htmlType="submit" loading={isSubmitting} disabled={!isValid} block type="primary">Сохранить</Button>
        </VStack>
      </Form>
    </VStack>
  );
};
