import { HStack, Icon, Text, VStack } from "@/shared/ui";
import cls from "./PostCardFooter.module.scss";

export const PostCardFooter = () => {
  return (
    <VStack>
      <HStack className={cls.isons}>
        <HStack gap={12}>
          <Icon type="Favorite2" />
          <Icon type="Comments" />
        </HStack>
        <Icon type="Bookmark" />
      </HStack>

      <HStack gap={4} align="start" className={cls.body}>
        <Text color="default" fw={600}>
          user1:
        </Text>
        <Text as="span" size={13} fw={400}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint vel minus unde voluptatum, rem sed.
        </Text>
      </HStack>
    </VStack>
  );
};
