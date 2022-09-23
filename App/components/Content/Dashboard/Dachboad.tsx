import style from "./Dachboad.module.scss";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { useTypeDispatch } from "../../../../hooks/My_hooks";
import { TreeItem, TreeView } from "@mui/lab";
import { ChevronRight, ExpandMore } from "@mui/icons-material";
import "react-loading-skeleton/dist/skeleton.css";
import { fetchSeparateDevice } from "../../../../store/reduces/ThunkDevices";
import { MySkeleton } from "../../Skeleton/SkeletonDashboard";
import cn from "classnames";
import { useDashboard } from "./useDashboard";

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useTypeDispatch();
  const {
    data_appliances,
    isLoadingDevices,
    handleExpandClick,
    handleToggle,
    expand,
  } = useDashboard();
  return (
    <div className={cn(style.dashboard, { [style.active_dashboard]: !isOpen })}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={cn(style.arrow, { [style.active_arrow]: !isOpen })}
      >
        <IoIosArrowBack />
      </div>
      <div className={style.name_menu}>Приборы</div>
      {isLoadingDevices ? (
        <MySkeleton />
      ) : (
        <>
          <button onClick={handleExpandClick}>
            {expand?.length === 0 ? "Открыть все" : "Закрыть все"}
          </button>

          <div className={style.container_items_menu}>
            <TreeView
              aria-label="icon expansion"
              defaultCollapseIcon={<ExpandMore />}
              defaultExpandIcon={<ChevronRight />}
              expanded={expand}
              onNodeToggle={handleToggle}
            >
              {data_appliances?.map((item, index) => (
                <TreeItem
                  nodeId={String(index)}
                  label={item?.name}
                  key={item?.name}
                  className={style.kind_name_device}
                >
                  {item.items.map((device) => (
                    <TreeItem
                      className={style.name_device}
                      key={device?.nameDevice}
                      label={device?.nameDevice}
                      nodeId={device?.nameDevice}
                      onClick={() => dispatch(fetchSeparateDevice(device))}
                    />
                  ))}
                </TreeItem>
              ))}
            </TreeView>
          </div>
        </>
      )}
    </div>
  );
};
