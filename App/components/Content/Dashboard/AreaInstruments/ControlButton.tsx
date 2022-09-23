import style from "./ArealInstruments.module.scss";
import { GiExpand } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { FC } from "react";
import { DragControls } from "framer-motion";
import {Reorder} from "../AreaInstruments/Reorder";

interface IControlButtonProps {
  closed: () => void;
  expand: () => void;
  dragControls: DragControls;
}

export const ControlButton: FC<IControlButtonProps> = ({
  closed,
  expand,
  dragControls,
}) => {
  return (
    <div className={style.container_control_button}>
      <Reorder dragControls={dragControls} />
      <button onClick={expand}>{<GiExpand />}</button>
      <button onClick={closed}>{<MdOutlineClose />}</button>
    </div>
  );
};
