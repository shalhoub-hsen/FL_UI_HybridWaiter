import { IOrderView } from "models/IOrder";
import { IOrderDetails } from "models/IOrderDetails";
import { http } from "utils/http";

const saveOrderDetails = async (orderView: IOrderView) => {
  return await http.post<IOrderView, boolean>("Order", orderView);
};

const OrderDetailsServices = {
  saveOrderDetails,
};

export default OrderDetailsServices;
