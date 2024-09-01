import React from "react";
import ScreenHeader from "components/Layout/ScreenHeader/ScreenHeader";
import CheckOutDetails from "../CheckOutPage/CheckOutDetails/CheckOutDetails";
const CheckOutPage = () => {
  return (
    <div className="container-xxl bg-white p-0">
      <ScreenHeader PageName={"CheckOut"} ItemName={"CheckOut"} />
      <CheckOutDetails />
    </div>
  );
};

export default CheckOutPage;
