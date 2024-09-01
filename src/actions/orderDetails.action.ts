import { createAsyncThunk } from "@reduxjs/toolkit";
import { IOrderView } from "models/IOrder";
import { IOrderDetails } from "models/IOrderDetails";
import OrderDetailsServices from "services/orderDetails.service";

const prefix = "order/";

export const saveOrder = createAsyncThunk<boolean, IOrderView>(
  `${prefix}save-order`,
  async (value) => {
    return await OrderDetailsServices.saveOrderDetails(value);
  }
);
