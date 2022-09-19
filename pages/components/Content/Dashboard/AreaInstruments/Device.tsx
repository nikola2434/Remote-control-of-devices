import { FC, useState } from "react";
import style from "./ArealInstruments.module.scss";
import { motion, useDragControls } from "framer-motion";
import { Resizable } from "re-resizable";
import { ControlButton } from "./ControlButton";
import { handle } from "./handle";
import ReactLoading from "react-loading";
import {
  changeFocusDevice,
  deleteActiveDevice,
  openModalDevice,
} from "../../../../store/reduces/PageDevaicess";
import { IDevice } from "../../../../types/types";
import { useTypeDispatch, useTypeSelector } from "../../../../My_hooks";
import Image from "next/image";

export const Device: FC<{ item: IDevice }> = ({ item }) => {
  const [height, setHeight] = useState(400);
  const [width, setWidth] = useState(600);

  const [heightImg, setHeightImg] = useState(height * 0.95);
  const [widthImg, setWidthImg] = useState(width * 0.95);

  const [isFocus, setIsFocus] = useState(false);

  const dragControls = useDragControls();

  const dispatch = useTypeDispatch();
  const { isLoadingSeparateDevice } = useTypeSelector(
    (state) => state.DevicesPage
  );

  return (
    <motion.div
      className={style.container_device}
      tabIndex={0} //для фокуса scss
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      dragListener={false}
      drag
      dragControls={dragControls}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 25,
      }}
      dragConstraints={{ top: -250, bottom: 250, left: -400, right: 400 }}
      whileDrag={{ scale: 1.02 }}
      dragElastic={0.3}
      dragMomentum={false}
      onFocus={() => {
        setIsFocus(true);
        dispatch(changeFocusDevice(item.id));
      }}
      onBlur={() => setIsFocus(false)}
    >
      <Resizable
        defaultSize={{ width, height }}
        onResizeStop={(e, direction, ref, d) => {
          setHeight(height + d.height);
          setWidth(width + d.width);
        }}
        onResize={(e, d, r, g) => {
          setHeightImg((height + g.height) * 0.95);
          setWidthImg((width + g.width) * 0.95);
        }}
        minWidth={600}
        minHeight={450}
        handleStyles={isFocus ? handle : null}
      >
        <div className={style.header}>
          <div className={style.name}>{item.name}</div>
          <div>
            <ControlButton
              closed={() => dispatch(deleteActiveDevice(item.id))}
              expand={() => {
                dispatch(openModalDevice(item.id));
              }}
              dragControls={dragControls}
            />
          </div>
        </div>
        <div className={style.container_img}>
          {item.img ? (
            <Image src={item.img} alt="" width={widthImg} height={heightImg} />
          ) : (
            <ReactLoading
              type="spin"
              color="#0b4f81"
              className={style.loading}
            />
          )}
        </div>
      </Resizable>
    </motion.div>
  );
};
