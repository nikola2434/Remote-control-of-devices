import style from "./Navbar.module.scss";

import { FC, useState } from "react";
import { dataUserMenu } from "./dataMenu";
import Menu_item from "./Menu.item/Menu.item";
import Link from "next/link";

export const Navbar: FC = () => {
  return (
    <div className={style.navbar}>
      <div className={style.user_nav}>
        {dataUserMenu.map((item) => (
          <Menu_item key={item.link} item={item} />
        ))}
      </div>
      <div className={style.auth}>
        <Link href="/components/Login">
          <a className={style.nav}>Войти</a>
        </Link>
      </div>
    </div>
  );
};
