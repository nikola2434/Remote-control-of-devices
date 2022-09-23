import { FC } from "react";
import { useTypeSelector } from "../../../hooks/My_hooks";
import { Modal } from "../modal/Modal";
import { AreaInstruments } from "./Dashboard/AreaInstruments/AreaInstruments";
import { Control } from "./Dashboard/AreaInstruments/Control_device/Control";
import { Dashboard } from "./Dashboard/Dachboad";

export const Appliances: FC = () => {
  const { isModal, activeDevices, nowFocus } = useTypeSelector(
    (state) => state.DevicesPage
  );

  return (
    <div>
      {isModal && <Modal />}
      <Dashboard />
      <div>
        <AreaInstruments />
      </div>

      {(activeDevices.length === 0 && nowFocus === undefined) ||
        (nowFocus !== undefined && (
          <Control
            device={activeDevices.find((item) => item.id === nowFocus)}
          />
        ))}
    </div>
  );
};
