import style from "../Navbar.module.scss";
import { motion } from "framer-motion";
import { ActiveLine } from "./ActiveLine";
import { IDataUserMenu } from "../../../types/types";
import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface IMenu_itemProps {
  item: IDataUserMenu;
}

const Menu_item: FC<IMenu_itemProps> = ({ item }) => {
  const route = useRouter();
  const isActive = route.asPath === item.link;
  return (
    <div className={style.nav}>
      <Link href={item.link}>
        <motion.a
          initial={{ color: "#fff" }}
          animate={{ color: isActive ? "#C7DAE9" : "#fff" }}
        >
          {item.title}
        </motion.a>
      </Link>
      {isActive && <ActiveLine />}
    </div>
  );
};

export default Menu_item;
