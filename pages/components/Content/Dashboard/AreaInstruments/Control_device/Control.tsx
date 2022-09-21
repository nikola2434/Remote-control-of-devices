import style from "./Control.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import { FC, useState } from "react";
import { motion } from "framer-motion";
import { IDevice } from "../../../../../types/types";
import { ControlPanel } from "./ControlPanel/ControlPanel";
import ReactLoading from "react-loading";
import cn from "classnames";

export const Control: FC<{ device: IDevice | undefined }> = ({ device }) => {
  const [isActive, setActive] = useState(true);

  return (
    <div className={cn(style.control, { [style.control_active]: isActive })}>
      <div
        className={cn(style.arrow_control, { [style.arrow_active]: isActive })}
        onClick={() => setActive(!isActive)}
      >
        <IoIosArrowForward />
      </div>
      <div className={style.name}>{device?.name}</div>
      {device?.device_control ? (
        <div className={style.container_button}>
          {device.device_control.map((control) => (
            <ControlPanel PanelControl={control} key={device.id} />
          ))}
        </div>
      ) : (
        <ReactLoading type="spin" color="#3e79a3" className={style.loading} />
      )}
    </div>
  );
};
