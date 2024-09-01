import { useAppDispatch } from "hooks/redux";
import React, { useState, useEffect } from "react";
export interface ServiceListProps {
  
}

export const useServiceList = (props: ServiceListProps) => {

const dispatch = useAppDispatch();

// useEffect(() => {
//     dispatch(getFoodMenu());
//   }, []);
 const services = [{
        name : "Master Chefs",
        description : "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
        icon:"fa-user-tie"
    },
    {
        name:"Quality Food",
        description :"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
        icon:"fa-utensils"
    },
    { 
    name:"Online Order",
    description :"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    icon:"fa-cart-plus"
    },
    {
        name:"24/7 Service",
        description :"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam ",
        icon:"fa-headset"
    }];

  return {
    ...props,
    services
  };
};