import { createAsyncThunk } from "@reduxjs/toolkit";
import { IService } from "models/IService";
import ServiceListServices from "services/serviceList.services";

const prefix = "serviceList/";

export const getServiceList = createAsyncThunk<IService[]>(
  `${prefix}get-service-list`,
  async () => {
    return await ServiceListServices.getServicesList();
  }
);
