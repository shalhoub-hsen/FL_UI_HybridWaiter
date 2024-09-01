import {
  addToCart,
  clearCart,
  removeFromCart,
  removeWhoteItemFromCart,
} from "actions/cart.action";
import { useAppDispatch } from "hooks/redux";
import { IFoodMenu } from "models/IFoodMenu";
import { useCartState } from "reducers/cart.reducer";

export interface CartProps {}

export const useCart = (props: CartProps) => {
  const dispatch = useAppDispatch();
  const cartState = useCartState();
  const { foodMenu } = cartState;

  const onAddItem = (item: IFoodMenu) => {
    dispatch(addToCart(item));
  };

  const onRemoveItem = (item: IFoodMenu) => {
    dispatch(removeFromCart(item));
  };

  const onRemoveWholeItem = (item: IFoodMenu) => {
    dispatch(removeWhoteItemFromCart(item));
  };

  const onClearCart = () => {
    dispatch(clearCart());
  };

  return {
    ...props,
    foodMenu,
    onClearCart,
    onAddItem,
    onRemoveItem,
    onRemoveWholeItem,
  };
};
