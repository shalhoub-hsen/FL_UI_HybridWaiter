import { createReducer } from "@reduxjs/toolkit";
import {
  addToCart,
  clearCart,
  removeFromCart,
  removeWhoteItemFromCart,
} from "actions/cart.action";
import { saveOrder } from "actions/orderDetails.action";
import { useAppSelector } from "hooks/redux";
import { IFoodMenu } from "models/IFoodMenu";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

type FoodItemCount = {
  item: IFoodMenu;
  count: number;
};

export interface CartState {
  foodMenu: FoodItemCount[];
}

const initialCartState: CartState = {
  foodMenu: [],
};

const cartReducer = createReducer(initialCartState, (builder) => {
  builder.addCase(addToCart.fulfilled, (state, action) => {
    if (state.foodMenu.some((obj) => obj.item.id === action.payload.id)) {
      state.foodMenu = state.foodMenu.map((val) => {
        return val.item.id === action.payload.id
          ? { ...val, count: val.count + 1 }
          : val;
      });
    } else {
      state.foodMenu = [
        ...state.foodMenu,
        {
          item: action.payload,
          count: 1,
        },
      ];
    }
  }),
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      let itemCount = state.foodMenu.find(
        (obj) => obj.item.id === action.payload.id
      )?.count;
      if (itemCount === 1) {
        state.foodMenu = state.foodMenu.filter(
          (obj) => obj.item.id !== action.payload.id
        );
      } else {
        state.foodMenu = state.foodMenu.map((val) => {
          return val.item.id === action.payload.id
            ? { ...val, count: val.count - 1 }
            : val;
        });
      }
    }),
    builder.addCase(removeWhoteItemFromCart.fulfilled, (state, action) => {
      state.foodMenu = state.foodMenu.filter(
        (obj) => obj.item.id !== action.payload.id
      );
    }),
    builder.addCase(clearCart.fulfilled, (state, action) => {
      state.foodMenu = [];
    }),
    builder.addCase(saveOrder.fulfilled, (state, action) => {
      state.foodMenu = [];
    });
});

const persisted = persistReducer(
  {
    key: "cartReducer",
    storage,
    whitelist: ["foodMenu"],
    timeout: 2000,
  },
  cartReducer
);

export const useCartState = () =>
  useAppSelector(({ cartReducer }) => cartReducer);

export default persisted;
