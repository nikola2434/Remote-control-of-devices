export interface IDataUserMenu {
  link: string;
  title: string;
}
type TypePanel = "button" | "input";

export interface IElementsInputs {
  typePanel: TypePanel;
  nameInput?: string;
}

export interface IDeviceControl {
  nameBlock: string;
  elenents: IElementsInputs[];
}

export interface IDevice {
  id: number;
  name: string;
  img?: string ;
  device_control?: IDeviceControl[] ;
}

export interface IItemsKind {
  id: number;
  nameDevice: string;
}
export interface IActiveDevices {
  name: string;
  items: IItemsKind[];
}
