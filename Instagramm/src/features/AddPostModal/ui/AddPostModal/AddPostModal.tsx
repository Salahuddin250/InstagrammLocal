import { Button, Modal } from "antd";
import cls from "./AddPostModal.module.scss";
import { Form, HStack, Input, Text, VStack } from "@/shared/ui";
import { type FC } from "react";
import { PaperClipOutlined } from "@ant-design/icons";
import { useAddModalFormSchema } from "../../model/schema/useAddModalFormSchema";

interface AddPostModalProps {
  isOpen: boolean
  onClose: () => void
}

export const AddPostModal: FC<AddPostModalProps> = ({ isOpen, onClose }) => {
  const { AddModalFormNames, register, watch, reset, handleSubmit, isValid, errors, isSubmitting } = useAddModalFormSchema()

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
      <Form className={cls.form}>
        <VStack align="end" gap={12}>
          <Input
          {...register(AddModalFormNames.CONTENT)}
            value={watch(AddModalFormNames.CONTENT)}
            placeholder="Введите текст"
            textarea={true}
          />

          <HStack justify="between">
            <PaperClipOutlined />
            <Text>0 / 200</Text>
          </HStack>
          <Button type="primary">Добавить</Button>
        </VStack>
      </Form>
    </Modal>
  );
};
