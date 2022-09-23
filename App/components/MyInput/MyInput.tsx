import { FC } from "react";
import { IElementsInputs } from "../../../App/types/types";
import { TextField } from "@mui/material";
import style from "./MyInput.module.scss";

interface IInputProps {
  element: IElementsInputs;
}

export const MyInput: FC<IInputProps> = ({ element }) => {
  return (
    <div>
      <input
        type="number"
        placeholder={element.nameInput}
        className={style.input}
      />
    </div>
  );
};
