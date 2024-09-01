import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFoodMenu } from "models/IFoodMenu";
import FoodMenuServices from "services/foodMenu.services";

const prefix = "foodMenu/";

export const getFoodMenu = createAsyncThunk<IFoodMenu[]>(
  `${prefix}get-food-menu`,
  async () => {
    return await FoodMenuServices.getFoodMenu();
  }
);

export const saveFoodMenu = createAsyncThunk<boolean, IFoodMenu>(
  `${prefix}save-foodMenu`,
  async (value) => {
    return await FoodMenuServices.saveFoodMenu(value);
  }
);

export const deleteFoodMenu = createAsyncThunk<boolean, number>(
  `${prefix}delete-foodMenu`,
  async (value) => {
    return await FoodMenuServices.deleteFoodMenu(value);
  }
);
