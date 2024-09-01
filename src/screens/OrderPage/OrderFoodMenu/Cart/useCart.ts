import { clearCart } from "actions/cart.action";
import { useAppDispatch } from "hooks/redux";
import { useCartState } from "reducers/cart.reducer";

export interface CartProps {}

export const useCart = (props: CartProps) => {
  const dispatch = useAppDispatch();
  const cartState = useCartState();
  const { foodMenu } = cartState;

  const onClearCart = () => {
    dispatch(clearCart());
  };

  return { ...props, foodMenu, onClearCart };
};
