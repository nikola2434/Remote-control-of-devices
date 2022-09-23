import { FC } from "react";
import style from "./SubTitle.module.scss";

export const SubTitle: FC<{ description: string }> = ({ description }) => {
  return <div className={style.description}>{description}</div>;
};
