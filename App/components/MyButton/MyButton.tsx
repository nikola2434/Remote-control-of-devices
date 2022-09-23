import style from "./MyButton.module.scss";
import { IElementsInputs } from "../../../App/types/types";
import { FC } from "react";

interface IMyButtonProps {
  element: IElementsInputs;
}

export const MyButton: FC<IMyButtonProps> = ({ element }) => {
  return <button className={style.button1}>{element.nameInput}</button>;
};
