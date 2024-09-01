import React from "react";
import ScreenHeader from "components/Layout/ScreenHeader/ScreenHeader";
import OrderFoodMenu from "./OrderFoodMenu/OrderFoodMenu";
const OrderPage = () => {
  return (
    <div className="container-xxl bg-white p-0">
      <ScreenHeader PageName={"Order"} ItemName={"Order"} />
      <OrderFoodMenu />
    </div>
  );
};

export default OrderPage;
