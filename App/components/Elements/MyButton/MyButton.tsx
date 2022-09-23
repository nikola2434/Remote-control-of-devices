import style from "./MyButton.module.scss";
import { FC } from "react";
import { IButton } from "../ElementsInterface";
import cn from "classnames";

export const MyButton: FC<IButton> = ({ children, typeButton, ...rest }) => {
  return (
    <button
      className={cn(style.button, {
        [style.button1]: typeButton === "1",
        [style.button2]: typeButton === "2",
      })}
      {...rest}
    >
      {children}
    </button>
  );
};
