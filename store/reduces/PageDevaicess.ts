import { fetchAllActiveDevices, fetchSeparateDevice } from "./ThunkDevices";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IDevice, IItemsKind } from "../../App/types/types";
import { IActiveDevices } from "../../App/types/types";

interface IInitialState {
  data_appliances: IActiveDevices[];
  activeDevices: IDevice[];
  isModal: boolean;
  modalDevice: undefined | IDevice;
  nowFocus: undefined | number;
  isLoadingDevices: boolean;
  errorDevices: string;
  isLoadingSeparateDevice: boolean;
  errorSeparateDevice: string;
}

export const initialState: IInitialState = {
  data_appliances: [],
  activeDevices: [],
  isModal: false,
  modalDevice: undefined,
  nowFocus: undefined,
  isLoadingDevices: true,
  errorDevices: "",
  isLoadingSeparateDevice: true,
  errorSeparateDevice: "",
};

const deviceSlice = createSlice({
  name: "device",
  initialState,

  reducers: {
    addActiveDevice(store, action: PayloadAction<IItemsKind>) {
      store.activeDevices.push({
        name: action.payload.nameDevice,
        id: action.payload.id,
      });
      store.nowFocus = action.payload.id;
    },
    deleteActiveDevice(store, action: PayloadAction<number>) {
      store.activeDevices = store.activeDevices.filter(
        (item) => item.id !== action.payload
      );
      if (store.activeDevices.length !== 0)
        store.nowFocus = store.activeDevices[0].id;
      else store.nowFocus = undefined;
    },
    openModalDevice(store, action: PayloadAction<number>) {
      store.isModal = true;
      store.modalDevice = store.activeDevices.find(
        (item) => item.id === action.payload
      );
    },
    closeModalDevice(store) {
      store.isModal = false;
    },
    changeFocusDevice(store, action: PayloadAction<number>) {
      store.nowFocus = action.payload;
    },
  },
  extraReducers: {
    [fetchAllActiveDevices.fulfilled.type]: (
      store,
      action: PayloadAction<IActiveDevices[]>
    ) => {
      store.data_appliances = action.payload;
      store.isLoadingDevices = false;
      store.errorDevices = "";
    },
    [fetchAllActiveDevices.pending.type]: (store) => {
      store.isLoadingDevices = true;
    },
    [fetchAllActiveDevices.rejected.type]: (
      store,
      action: PayloadAction<string>
    ) => {
      store.errorDevices = action.payload;
      store.isLoadingDevices = false;
    },

    [fetchSeparateDevice.fulfilled.type]: (
      store,
      action: PayloadAction<IDevice>
    ) => {
      store.activeDevices[store.activeDevices.length - 1].device_control =
        action.payload.device_control;
      store.activeDevices[store.activeDevices.length - 1].img =
        action.payload.img;
      store.isLoadingSeparateDevice = false;
      store.errorSeparateDevice = "";
    },
    [fetchSeparateDevice.pending.type]: (store) => {
      store.isLoadingSeparateDevice = true;
    },
    [fetchSeparateDevice.rejected.type]: (
      store,
      action: PayloadAction<string>
    ) => {
      store.errorSeparateDevice = action.payload;
      store.isLoadingSeparateDevice = false;
    },
  },
});

export default deviceSlice.reducer;

export const {
  addActiveDevice,
  deleteActiveDevice,
  openModalDevice,
  closeModalDevice,
  changeFocusDevice,
} = deviceSlice.actions;
