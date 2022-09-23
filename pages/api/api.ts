import { IActiveDevices } from "../../App/types/types";
import axios from "axios";
import { IDevice } from "../../App/types/types";

const api = axios.create({
  baseURL: "http://localhost:3001/",
});

export const DevicesApi = {
  getActiveDevices() {
    return api.get<IActiveDevices[]>("allActiveDevices").then((response) => {
      return response.data;
    });
  },
  getSeparateDevice(id: number) {
    return api.get<IDevice[]>(`devices?id=${id}`).then((response) => {
      return response.data[0];
    });
  },
};
