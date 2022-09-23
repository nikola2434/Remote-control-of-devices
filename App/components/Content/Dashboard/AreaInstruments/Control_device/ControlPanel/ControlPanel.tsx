import { FC } from "react";
import { IDeviceControl } from "../../../../../../../App/types/types";
import { MyButton } from "../../../../../MyButton/MyButton";
import { MyInput } from "../../../../../MyInput/MyInput";
import style from "./ControlPanel.module.scss";

interface ControlPanelProps {
  PanelControl: IDeviceControl;
}

export const ControlPanel: FC<ControlPanelProps> = ({ PanelControl }) => {
  return (
    <div className={style.panel_control}>
      <div className={style.name_panel_control}>{PanelControl.nameBlock}</div>
      <div className={style.container_control}>
        {PanelControl.elenents.map((element) =>
          element.typePanel === "input" ? (
            <MyInput element={element} />
          ) : (
            <MyButton element={element} />
          )
        )}
      </div>
    </div>
  );
};
