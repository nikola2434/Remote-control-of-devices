import style from "./Control.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import { FC, useState } from "react";
import { motion } from "framer-motion";
import { IDevice } from "../../../../../types/types";
import { ControlPanel } from "./ControlPanel/ControlPanel";
import ReactLoading from "react-loading";

export const Control: FC<{ device: IDevice | undefined }> = ({ device }) => {
  const [isActive, setActive] = useState(true);

  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: isActive ? 0 : 210 }}
      transition={{ type: "tween" }}
      className={style.control}
    >
      <motion.div
        className={style.arrow_control}
        onClick={() => setActive(!isActive)}
        initial={false}
        animate={{ rotate: isActive ? 0 : 180 }}
        transition={{ type: "tween" }}
      >
        <IoIosArrowForward />
      </motion.div>
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
    </motion.div>
  );
};
