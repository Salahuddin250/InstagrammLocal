import { type FC, memo, type ReactNode } from "react";
import cls from "./UserCard.module.scss";
import { HStack } from "../Stack/HStack";
import { VStack } from "../Stack/VStack";
import { AppLink } from "../AppLink/AppLink";
import { Text } from "../Text/Text";
import { classNames } from "@/shared/lib/classNames";
import { Avatar } from "@/shared/ui";
import { type AvatarSize } from "../Avatar/Avatar";

interface UserCardProps {
  className?: string
  id: string
  src?: string
  alt?: string
  title: string
  content: string
  size?: AvatarSize
  onClick?: () => void
  children?: ReactNode
}

export const UserCard: FC<UserCardProps> = memo(({
  className = "",
  id,
  src,
  alt,
  title,
  content,
  size,
  onClick,
  children
}) => {
  return (
    <HStack justify="between">
      <AppLink onClick={onClick} className={cls.link} to={`/profile/${id}`}>
      <HStack gap={16} className={classNames(cls.userCard, {}, [className])}>
        <Avatar size={size} src={src && src} />
        <VStack align="start">
          <Text color="default" as="span"fw={500} size={14}>{title}</Text>
          {content && <Text as="span" color="red"fw={400} size={12}>{content}</Text>}
        </VStack>
      </HStack>
    </AppLink>
    {children}
    </HStack>
  );
});
