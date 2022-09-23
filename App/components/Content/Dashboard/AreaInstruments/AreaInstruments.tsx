import { FC } from "react";
import { useTypeSelector } from "../../../../../hooks/My_hooks";

import style from "./ArealInstruments.module.scss";

import { Device } from "./Device/Device";

export const AreaInstruments: FC = (props) => {
  const activeDevices = useTypeSelector(
    (state) => state.DevicesPage.activeDevices
  );
  return (
    <div className={style.area}>
      {activeDevices.length === 0 ||
        activeDevices.map((item) => <Device key={item.id} item={item} />)}
    </div>
  );
};
