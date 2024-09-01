import { saveBooking } from "actions/booking.action";
import { useAppDispatch } from "hooks/redux";
import { IBooking } from "models/IBooking";
import React, { useState } from "react";
export interface BookingPageProps {}

export const useBookingPage = (props: BookingPageProps) => {
  const dispatch = useAppDispatch();

  const [orderState, setOrder] = useState<IBooking>({
    id: 0,
    fullName: "",
    email: "",
    date: null,
    peopleCount: null,
    specialRequest: null,
  });

  const onValueChange = (key: string, value: string) => {
    setOrder({
      ...orderState,
      [key]: value,
    });
  };

  const onBookOrder = (event: React.FormEvent) => {
    event.preventDefault();
    const newBooking: IBooking = {
      id: 0,
      email: orderState.email,
      fullName: orderState.fullName,
      peopleCount: orderState.peopleCount,
      date: orderState.date,
      specialRequest: orderState.specialRequest,
    };

    dispatch(saveBooking(newBooking));
  };

  return { onValueChange, orderState, onBookOrder };
};
