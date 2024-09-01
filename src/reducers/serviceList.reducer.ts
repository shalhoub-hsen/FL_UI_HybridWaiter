import { createReducer } from "@reduxjs/toolkit";
import { getServiceList } from "actions/serviceList.action";
import { useAppSelector } from "hooks/redux";
import { IService } from "models/IService";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

export interface ServiceListState {
  serviceList: IService[];
}

const initialServiceListState: ServiceListState = {
  serviceList: [],
};

const serviceListReducer = createReducer(initialServiceListState, (builder) => {
  builder.addCase(getServiceList.fulfilled, (state, action) => {
    state.serviceList = action.payload;
  });
});

const persisted = persistReducer(
  {
    key: "serviceListReducer",
    storage,
    whitelist: ["serviceList"],
    timeout: 2000,
  },
  serviceListReducer
);

export const useServiceListState = () =>
  useAppSelector(({ serviceListReducer }) => serviceListReducer);

export default persisted;
