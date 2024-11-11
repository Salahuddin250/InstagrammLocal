import { Text } from "@/shared/ui";
import cls from "./NavSearch.module.scss";
import { type ChangeEvent, useState } from "react";

export const NavSearch = () => {
  const [search, setSearch] = useState<string>("");

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  return (
     <div className={cls.search}>
        <input className={cls.input} type="text" onChange={onChangeSearch} value={search}/>
        {!search && (
        <div className={cls.text}>
           <Text color="gray" as="span" fw={400} size={16}>
              Search
           </Text>
        </div>
        )}
     </div>
  );
};
