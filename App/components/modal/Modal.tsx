import Image from "next/image";
import { FC } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useTypeDispatch, useTypeSelector } from "../../../hooks/My_hooks";
import { closeModalDevice } from "../../../store/reduces/PageDevaicess";
import { ControlPanel } from "../Content/Dashboard/AreaInstruments/Control_device/ControlPanel/ControlPanel";
import style from "./Modal.module.scss";

export const Modal: FC = (props) => {
  const dispatch = useTypeDispatch();
  const modalDevice = useTypeSelector((state) => state.DevicesPage.modalDevice);
  return (
    <div className={style.modal}>
      {modalDevice && (
        <div>
          <button
            className={style.button_close}
            onClick={() => dispatch(closeModalDevice())}
          >
            <MdOutlineClose />
          </button>
          <div className={style.device}>
            {modalDevice && (
              <div className={style.img}>
                <Image
                  src={modalDevice.img}
                  alt=""
                  className={style.image}
                  width={1200}
                  height={800}
                />
              </div>
            )}

            <div className={style.controlM}>
              {modalDevice.device_control?.map((control) => (
                <ControlPanel key={control.nameBlock} PanelControl={control} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
