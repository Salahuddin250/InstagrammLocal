import { Button, Modal, message } from "antd";
import cls from "./AddPostModal.module.scss";
import { Form, HStack, Input, Text, VStack } from "@/shared/ui";
import { useState, type FC } from "react";
import { PaperClipOutlined } from "@ant-design/icons";
import { AddModalFormNames, type AddModalFormValues, useAddModalFormSchema } from "../../model/schema/useAddModalFormSchema";
import { checkImages } from "@/shared/lib/checkImages";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { createPost } from "@/entities/PostCard";

interface AddPostModalProps {
  isOpen: boolean
  onClose: () => void
}

export const AddPostModal: FC<AddPostModalProps> = ({ isOpen, onClose }) => {
  const {
    AddModalFormNames,
    register,
    watch,
    reset,
    handleSubmit,
    isValid,
    errors,
    isSubmitting
  } = useAddModalFormSchema();

  const [images, setImages] = useState([])

  const dispatch = useAppDispatch()

  const handleChangeImages = (e: any) => {
    const files = [...e.target.files]
    const { err, newImages } = checkImages(files)

    if (err) message.error(err)

    setImages([...images, ...newImages])
  }

  const handleDeleteImage = (number: number) => {
    const newImages = [...images]
    newImages.splice(number, 1)
    setImages(newImages)
  }

  const onSubmit = async (data: AddModalFormValues) => {
    if (images.length <= 0) return await message.error("Выберите файл")

    await dispatch(createPost({ images, content: data.content }))
    setImages([])
    reset()
    onClose()
  }

  return (
    <Modal
      footer={false}
      open={isOpen}
      centered
      onCancel={onClose}
      title={
        <Text fw={700} size={18} color="default">
          AddPost
        </Text>
      }
    >
      <Form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
        <VStack align="end" gap={26}>
          <Input
            {...register(AddModalFormNames.CONTENT)}
            value={watch(AddModalFormNames.CONTENT)}
            error={errors?.content?.message}
            placeholder="Введите текст"
            textarea={true}
          />
          {images.length > 0 && (
            <HStack gap={4} wrap="wrap">
              {images.map((img, index) =>
                (
                  <div key={index} className={cls.image}>
                    <img src={URL.createObjectURL(img)} alt="" />
                    <span onClick={() => { handleDeleteImage(index); }}>&times;</span>
                  </div>
                )
              )}
            </HStack>
          )}

          <VStack align="end" gap={12}>
            <HStack justify="between">
              <label className={cls.chooseImages} htmlFor="Files">
                <input id="Files" type="file" accept="image/*, video/*" multiple onChange={handleChangeImages}/>
                <PaperClipOutlined />
              </label>{" "}
              <Text fw={500} color={errors?.content ? "error" : "default"}>
                {watch(AddModalFormNames.CONTENT).length} / 200
              </Text>
            </HStack>
            <Button htmlType="submit" disabled={!isValid} type="primary" loading={isSubmitting}>
              Добавить
            </Button>
          </VStack>
        </VStack>
      </Form>
    </Modal>
  );
};
