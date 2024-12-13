import { HStack, Text, UserCard, VStack } from "@/shared/ui";
import cls from "./NavSearch.module.scss";
import {
  type ChangeEvent,
  useState,
  useEffect,
  useMemo,
  useCallback
} from "react";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import {
  getSearchLoading,
  getSearchUsers,
  profileActions,
  searchUsers
} from "@/entities/Profile";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import { debounce } from "lodash-es";

export const NavSearch = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  const users = useSelector(getSearchUsers);
  const searchLoading = useSelector(getSearchLoading);

  const onSearchUsers = useMemo(
    () =>
      debounce(async (query) => {
        dispatch(searchUsers({ search: query }));
      }, 500),
    []
  );

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSearch(value);
    onSearchUsers(value);
  };

  const onClearSearch = useCallback(() => {
    setSearch("");
    dispatch(profileActions.setSearchUsers());
  }, []);

  return (
    <div className={cls.search}>
      <input
        className={cls.input}
        type="text"
        onChange={onChangeSearch}
        value={search}
      />
      {!search
        ? (
        <div className={cls.text}>
          <Text color="gray" as="span" fw={400} size={16}>
            Search
          </Text>
        </div>
          )
        : (
        <span className={cls.close} onClick={onClearSearch}>
          &times;
        </span>
          )}
      {search && (
        <VStack justify="center" className={cls.list}>
          {users.length > 0 && !searchLoading
            ? (
                search &&
            !searchLoading &&
            users.map((user) => (
              <UserCard
                key={user._id}
                title={user.fullname}
                content={`@${user.username}`}
                id={user._id}
                size={39}
                src={user.avatar}
                onClick={onClearSearch}
              ></UserCard>
            ))
              )
            : search && !searchLoading
              ? (
            <Text>Ничего не найдено</Text>
                )
              : (
                  searchLoading && <Spin size="small" />
                )}
        </VStack>
      )}
    </div>
  );
};
