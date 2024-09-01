import { createReducer } from "@reduxjs/toolkit";
import { getFoodMenu } from "actions/foodMenu.action";
import { useAppSelector } from "hooks/redux";
import { IFoodMenu } from "models/IFoodMenu";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

export interface FoodMenuState {
  foodMenu: IFoodMenu[];
}

const initialFoodMenuState: FoodMenuState = {
  foodMenu: [],
};

const foodMenuReducer = createReducer(initialFoodMenuState, (builder) => {
  builder.addCase(getFoodMenu.fulfilled, (state, action) => {
    state.foodMenu = action.payload;
  });
});

const persisted = persistReducer(
  {
    key: "foodMenuReducer",
    storage,
    whitelist: ["foodMenu"],
    timeout: 2000,
  },
  foodMenuReducer
);

export const useFoodMenuState = () =>
  useAppSelector(({ foodMenuReducer }) => foodMenuReducer);

export default persisted;
