import style from "./Dachboad.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTypeSelector } from "../../../My_hooks";
import { TreeItem, TreeView } from "@mui/lab";
import { ChevronRight, ExpandMore } from "@mui/icons-material";
import "react-loading-skeleton/dist/skeleton.css";

import { useTypeDispatch } from "../../../My_hooks";
import { IActiveDevices } from "../../../types/types";
import {
  fetchAllActiveDevices,
  fetchSeparateDevice,
} from "../../../store/reduces/ThunkDevices";
import { MySkeleton } from "../../Skeleton/SkeletonDashboard";

export const Dachboad = () => {
  const { data_appliances, isLoadingDevices } = useTypeSelector(
    (state) => state.DevicesPage
  );
  const dispatch = useTypeDispatch();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    dispatch(fetchAllActiveDevices());
  }, [dispatch]);

  function expandId(data: IActiveDevices[]): string[] {
    const array: string[] = [];
    for (let index = 0; index < data.length; index++) {
      array.push(String(index));
    }
    return array;
  }

  const [expand, setExpand] = useState<string[]>(expandId(data_appliances));

  function handleToggle(event: any, nodeIds: string[]): void {
    setExpand(nodeIds);
  }
  function handleExpandClick(): void {
    setExpand(expand.length === 0 ? expandId(data_appliances) : []);
  }
  return (
    <motion.div
      className={style.dachboad}
      initial={{ x: -270 }}
      animate={{ x: isOpen ? 0 : -210 }}
      transition={{ type: "tween" }}
    >
      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        className={style.arrow}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ type: "tween" }}
      >
        <IoIosArrowForward />
      </motion.div>
      <div className={style.name_menu}>Приборы</div>

      {isLoadingDevices ? (
        <MySkeleton />
      ) : (
        <>
          <button onClick={handleExpandClick}>
            {expand.length === 0 ? "Открыть все" : "Закрыть все"}
          </button>
          <motion.div
            className={style.container_items_menu}
            animate={{ x: isOpen ? 0 : -15 }}
          >
            <TreeView
              aria-label="icon expansion"
              defaultCollapseIcon={<ExpandMore />}
              defaultExpandIcon={<ChevronRight />}
              expanded={expand}
              onNodeToggle={handleToggle}
            >
              {data_appliances.map((item, index) => (
                <TreeItem
                  nodeId={String(index)}
                  label={item.name}
                  key={item.name}
                  className={style.kind_name_device}
                >
                  {item.items.map((device) => (
                    <TreeItem
                      className={style.name_device}
                      key={device.nameDevice}
                      label={device.nameDevice}
                      nodeId={device.nameDevice}
                      onClick={() => dispatch(fetchSeparateDevice(device))}
                    />
                  ))}
                </TreeItem>
              ))}
            </TreeView>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};
