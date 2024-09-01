import { createAsyncThunk } from "@reduxjs/toolkit";
import { IMenuTable } from "models/IMenuTable";
import MenuTableServices from "services/menuTable.services";

const prefix = "menuTable/";

export const getMenuTable = createAsyncThunk<IMenuTable[]>(
  `${prefix}get-menu-table`,
  async () => {
    return await MenuTableServices.getMenuTable();
  }
);
