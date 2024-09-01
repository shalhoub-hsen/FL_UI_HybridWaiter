import { createReducer } from "@reduxjs/toolkit";
import { getMenuTable } from "actions/menuTable.action";
import { useAppSelector } from "hooks/redux";
import { IMenuTable } from "models/IMenuTable";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

export interface MenuTableState {
  menuTable: IMenuTable[];
}

const initialMenuTableState: MenuTableState = {
  menuTable: [],
};

const menuTableReducer = createReducer(initialMenuTableState, (builder) => {
  builder.addCase(getMenuTable.fulfilled, (state, action) => {
    state.menuTable = action.payload;
  });
});

const persisted = persistReducer(
  {
    key: "menuTableReducer",
    storage,
    whitelist: ["menuTable"],
    timeout: 2000,
  },
  menuTableReducer
);

export const useMenuTableState = () =>
  useAppSelector(({ menuTableReducer }) => menuTableReducer);

export default persisted;
