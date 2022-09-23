import { useState, useEffect } from "react";
import { useTypeDispatch, useTypeSelector } from "../../../../hooks/My_hooks";
import { fetchAllActiveDevices } from "../../../../store/reduces/ThunkDevices";
import { IActiveDevices } from "../../../types/types";

export const useDashboard = () => {
  const { data_appliances, isLoadingDevices } = useTypeSelector(
    (state) => state.DevicesPage
  );

  const [expand, setExpand] = useState<string[]>(expandId(data_appliances));

  const dispatch = useTypeDispatch();
  useEffect(() => {
    dispatch(fetchAllActiveDevices());
  }, [dispatch]);

  function expandId(data: IActiveDevices[]): string[] {
    const array: string[] = [];
    for (let index = 0; index < data?.length; index++) {
      array.push(String(index));
    }
    return array;
  }
  function handleExpandClick(): void {
    setExpand(expand?.length === 0 ? expandId(data_appliances) : []);
  }
  function handleToggle(event: any, nodeIds: string[]): void {
    setExpand(nodeIds);
  }
  return {
    isLoadingDevices,
    data_appliances,
    handleExpandClick,
    handleToggle,
    expand,
  };
};
