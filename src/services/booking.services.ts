import { IBooking } from "models/IBooking";
import { http } from "utils/http";

const saveBooking = async (booking: IBooking) => {
  return await http.post<IBooking, boolean>("Booking", booking);
};

const BookingServices = {
  saveBooking,
};

export default BookingServices;
