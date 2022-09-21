import { useTypeSelector } from "../../My_hooks";

import { Modal } from "../modal/Modal";
import { AreaInstruments } from "./Dashboard/AreaInstruments/AreaInstruments";
import { Control } from "./Dashboard/AreaInstruments/Control_device/Control";
import { Dachboad } from "./Dashboard/Dachboad";

function Content() {
  const { isModal, activeDevices, nowFocus, } = useTypeSelector(
    (state) => state.DevicesPage
  );

  return (
    <div>
      {isModal && <Modal />}
      <Dachboad />
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
}

export default Content;
