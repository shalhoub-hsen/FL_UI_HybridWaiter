import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBooking } from "models/IBooking";
import BookingServices from "services/booking.services";

const prefix = "booking/";

export const saveBooking = createAsyncThunk<boolean, IBooking>(
  `${prefix}save-booking`,
  async (value) => {
    return await BookingServices.saveBooking(value);
  }
);
