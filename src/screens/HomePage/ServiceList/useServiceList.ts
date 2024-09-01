import { getServiceList } from "actions/serviceList.action";
import { useAppDispatch } from "hooks/redux";
import { IService } from "models/IService";
import { useEffect } from "react";
import { useServiceListState } from "reducers/serviceList.reducer";

export interface ServiceListProps {}

export const useServiceList = (props: ServiceListProps) => {
  const dispatch = useAppDispatch();

  const serviceListState = useServiceListState();
  const { serviceList } = serviceListState;

  useEffect(() => {
    dispatch(getServiceList());
  }, []);

  var services: IService[] = [
    {
      id: 0,
      name: "Master Chefs",
      description:
        "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      icon: "fa-user-tie",
    },
    {
      id: 1,
      name: "Quality Food",
      description:
        "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      icon: "fa-utensils",
    },
    {
      id: 2,
      name: "Online Order",
      description:
        "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
      icon: "fa-cart-plus",
    },
    {
      id: 3,
      name: "24/7 Service",
      description:
        "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam ",
      icon: "fa-headset",
    },
  ];
  return { ...props, serviceList };
};
