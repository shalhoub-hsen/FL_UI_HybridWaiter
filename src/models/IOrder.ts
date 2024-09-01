import { IOrderDetails } from "./IOrderDetails";

export interface IOrderView {
  address: string;
  orderName: string;
  phoneNumber: string;
  notes: string;
  orderDetails: IOrderDetails[];
}
