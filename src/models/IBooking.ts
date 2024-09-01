export interface IBooking {
  id: number;
  fullName: string | null;
  email: string | null;
  date: Date | null;
  peopleCount: number | null;
  specialRequest: string | null;
}
