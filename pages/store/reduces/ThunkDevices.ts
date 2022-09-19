import { IDevice } from "./../../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { DevicesApi } from "../../api/api";
import { IItemsKind } from "../../types/types";
import { addActiveDevice } from "./PageDevaicess";

const textError = "Не удалось загрузить данные";

export const fetchAllActiveDevices = createAsyncThunk(
  "data_appliances/fetchAllActiveDevices",
  async (_, thunkAPI) => {
    try {
      return await DevicesApi.getActiveDevices();
    } catch (e) {
      return thunkAPI.rejectWithValue(textError);
    }
  }
);

export const fetchSeparateDevice = createAsyncThunk(
  "activeDevices/fetchSeparateDevice",
  async (device: IItemsKind, thunkAPI) => {
    try {
      thunkAPI.dispatch(addActiveDevice(device));

      return DevicesApi.getSeparateDevice(device.id);
    } catch (e) {
      return thunkAPI.rejectWithValue(textError);
    }
  }
);
