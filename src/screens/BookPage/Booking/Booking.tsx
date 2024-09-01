import React from "react";
import { BookingPageProps, useBookingPage } from "./useBooking";

const Booking: React.FC<BookingPageProps> = (props) => {
  const { onValueChange, orderState, onBookOrder } = useBookingPage(props);

  return (
    <>
      <div>
        <div
          className="container-xxl py-5 px-0 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="row g-0">
            <div className="col-md-6">
              <div className="video">
                <button
                  type="button"
                  // className="btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/watch?v=rYEDA3JcQqw"
                  data-bs-target="#videoModal"
                >
                  <span />
                </button>
              </div>
            </div>
            <div className="col-md-6 bg-dark d-flex align-items-center">
              <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                  Reservation
                </h5>
                <h1 className="text-white mb-4">Book A Table Online</h1>
                <form
                  onSubmit={(event) => {
                    onBookOrder(event);
                  }}
                >
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          value={orderState.fullName || ""}
                          onChange={(e) => {
                            onValueChange("fullName", e.target.value);
                          }}
                          required
                        />
                        <label htmlFor="name">
                          Your Name <span style={{ color: "red" }}>*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          value={orderState.email || ""}
                          onChange={(e) => {
                            onValueChange("email", e.target.value);
                          }}
                          required
                        />
                        <label htmlFor="email">
                          Your Email <span style={{ color: "red" }}>*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="form-floating date"
                        id="date3"
                        data-target-input="nearest"
                      >
                        <input
                          type="datetime-local"
                          className="form-control datetimepicker-input"
                          id="datetime"
                          placeholder="Date & Time"
                          data-target="#date3"
                          data-toggle="datetimepicker"
                          value={(orderState.date || "").toString()}
                          onChange={(e) => {
                            onValueChange("date", e.target.value);
                          }}
                          required
                        />
                        <label htmlFor="datetime">
                          Date &amp; Time{" "}
                          <span style={{ color: "red" }}>*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="number"
                          className="form-control"
                          id="peopleCount"
                          placeholder=""
                          value={orderState.peopleCount || ""}
                          onChange={(e) => {
                            if (
                              e.target.value != "" &&
                              (e.target.value.toString() == "-" ||
                                Number(e.target.value) <= 0)
                            ) {
                              onValueChange("peopleCount", "");
                            } else {
                              onValueChange("peopleCount", e.target.value);
                            }
                          }}
                          required
                        />
                        <label htmlFor="peopleCount">
                          No Of People <span style={{ color: "red" }}>*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Special Request"
                          id="message"
                          style={{ height: "100px" }}
                          defaultValue={""}
                          value={orderState.specialRequest || ""}
                          onChange={(e) => {
                            onValueChange("specialRequest", e.target.value);
                          }}
                        />
                        <label htmlFor="message">Special Request</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="videoModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Youtube Video
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                {/* <div className="ratio ratio-16x9">
                  <iframe className="embed-responsive-item" src id="video" allowFullScreen allowscriptaccess="always" allow="autoplay" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
