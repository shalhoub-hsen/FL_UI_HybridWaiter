import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFoodMenu } from "models/IFoodMenu";

const prefix = "cart/";

export const addToCart = createAsyncThunk<IFoodMenu, IFoodMenu>(
  `${prefix}add-menu`,
  async (itemMenu) => {
    return itemMenu;
  }
);
export const removeFromCart = createAsyncThunk<IFoodMenu, IFoodMenu>(
  `${prefix}remove-menu`,
  async (itemMenu) => {
    return itemMenu;
  }
);

export const removeWhoteItemFromCart = createAsyncThunk<IFoodMenu, IFoodMenu>(
  `${prefix}remove-whole-item`,
  async (itemMenu) => {
    return itemMenu;
  }
);

export const clearCart = createAsyncThunk<any>(
  `${prefix}clear-menu`,
  async () => {
    return true;
  }
);
