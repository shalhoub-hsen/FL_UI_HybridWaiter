import { saveOrder } from "actions/orderDetails.action";
import { useAppDispatch } from "hooks/redux";
import { IOrderView } from "models/IOrder";
import { IOrderDetails } from "models/IOrderDetails";
import { useState } from "react";
import { useAuthenticationState } from "reducers/authentication.reducer";
import { useCartState } from "reducers/cart.reducer";

export interface CheckOutDetailsPageProps {}

export const useCheckOutDetailsPage = (props: CheckOutDetailsPageProps) => {
  const dispatch = useAppDispatch();
  const cartState = useCartState();
  const { foodMenu } = cartState;

  const authState = useAuthenticationState();
  const { isAuthenticated } = authState;

  const [displayAlert, setDisplayAlert] = useState<boolean>(false);

  const hideAlert = () => {
    setDisplayAlert(false);
  };

  const [orderState, setOrder] = useState<Partial<IOrderView>>({
    address: "",
    notes: "",
    orderName: "",
    phoneNumber: "",
  });

  const onValueChange = (key: string, value: string) => {
    setOrder({
      ...orderState,
      [key]: value,
    });
  };

  const handleOrder = (event: React.FormEvent) => {
    event.preventDefault();

    if (!isAuthenticated) {
      setDisplayAlert(true);
      return;
    }

    if (foodMenu.length == 0) return;

    const orderDetails: IOrderDetails[] = foodMenu.map((obj) => {
      return {
        id: 0,
        foodMenuId: obj.item.id,
        quantity: obj.count,
        price: obj.item.price * obj.count,
      } as IOrderDetails;
    });

    const finalOrderView: IOrderView = {
      address: orderState.address || "",
      notes: orderState.notes || "",
      orderName: orderState.orderName || "",
      phoneNumber: orderState.phoneNumber || "",
      orderDetails: orderDetails,
    };
    dispatch(saveOrder(finalOrderView));
    setOrder({
      address: "",
      notes: "",
      orderName: "",
      phoneNumber: "",
    });
  };
  return { handleOrder, orderState, onValueChange, displayAlert, hideAlert };
};
