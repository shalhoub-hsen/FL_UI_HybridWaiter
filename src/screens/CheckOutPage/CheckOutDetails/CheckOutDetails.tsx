import React from "react";
import styles from "Order.module.css";
import {
  CheckOutDetailsPageProps,
  useCheckOutDetailsPage,
} from "./useCheckOutDetails";
import Alert from "components/Alert/Alert";
const CheckOutDetails: React.FC<CheckOutDetailsPageProps> = (props) => {
  const { handleOrder, orderState, onValueChange, displayAlert, hideAlert } =
    useCheckOutDetailsPage(props);
  return (
    <div className={styles.wrapper}>
      {/* <section> */}
      <div className={styles.main_checkout}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={styles.inner_checkout}>
                <form
                  id="checkoutform"
                  onSubmit={(event) => {
                    handleOrder(event);
                  }}
                  // action="https://glorywebsdemo.com/ThemeForest/CraveOrdering/thank-you.html"
                >
                  <div
                    className={`${styles.left_cnt} col-lg-8 col-md-7 col-sm-12 col-xs-12`}
                  >
                    <h2 className={styles.title}>Delivery Address</h2>
                    <div className={styles["checkout-form"]}>
                      <ul>
                        <li>
                          <label htmlFor="FirstName">
                            First Name<span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="orderName"
                            name="orderName"
                            value={orderState.orderName || ""}
                            onChange={(e) => {
                              onValueChange("orderName", e.target.value);
                            }}
                            required
                          />
                        </li>

                        {/* <li className={styles.fullwidth}>
                            <label htmlFor="CompanyName">Company Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="CompanyName"
                              name="Company Name"
                            />
                          </li> */}
                        {/* <li>
                            <label htmlFor="EmailAddress">
                              Email Address<span>*</span>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="EmailAddress"
                              name="checkoutemail"
                            />
                          </li> */}
                        <li>
                          <label htmlFor="PhoneNumber">
                            Phone Number<span>*</span>
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="PhoneNumber"
                            name="phone"
                            value={orderState.phoneNumber || ""}
                            onChange={(e) => {
                              onValueChange("phoneNumber", e.target.value);
                            }}
                            required
                          />
                        </li>
                        <li>
                          <label htmlFor="Address">
                            Address<span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Street Address"
                            name="address"
                            id="Address"
                            value={orderState.address || ""}
                            onChange={(e) => {
                              onValueChange("address", e.target.value);
                            }}
                            required
                          />
                          {/* <input
                              type="text"
                              className="form-control"
                              placeholder="Apartment, Suite, Unit etc. (optional)"
                            /> */}
                        </li>
                        {/* <li>
                            <label htmlFor="PostcodeZip">
                              Post code / Zip<span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="PostcodeZip"
                              name="postcode"
                            />
                          </li> */}
                        {/* <li>
                            <label htmlFor="Town">
                              Town / City<span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="Town"
                              name="town"
                            />
                          </li> */}
                        <li>
                          <label htmlFor="OrderNotes">Order Notes</label>
                          <textarea
                            className="form-control"
                            id="OrderNotes"
                            defaultValue={""}
                            value={orderState.notes || ""}
                            onChange={(e) => {
                              onValueChange("notes", e.target.value);
                            }}
                          />
                        </li>
                        <li>
                          <button
                            type="submit"
                            className={`${styles["checkout-btn"]} ${styles.red_btn} ${styles.trans} ${styles["hvr-float-shadow"]}`}
                            name="checkout"
                          >
                            Place Order
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <div
                      className={`${styles.right_cntbar} col-lg-4 col-md-5 col-sm-12 col-xs-12`}
                    >
                      <div className={styles.your_order}>
                        <div className={styles.Order_title}>
                          <span className={styles.O_lefttitle}>
                            Order Details
                          </span>
                        </div>
                        <div className={styles.Order_number}>
                          <ul>
                            <li>
                              <div className={styles.Order_number}>
                                <div className={styles.Order_names}>
                                  <span className={styles.O_name}>
                                    1x Mexican Pizza
                                  </span>
                                  <span className={styles.O_type}>
                                    Extra Large
                                  </span>
                                </div>
                                <div className={styles.Order_price}>
                                  <span className={styles.O_price}>$12</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className={styles.totle_Oamount}>
                          <div className={styles.O_totlecost}>
                            <span className={styles.O_title}>Subtotal</span>
                            <span
                              className={`${styles.O_price} ${styles.O_title_otput}`}
                            >
                              $156
                            </span>
                          </div>
                          <div className={styles.O_totlecost}>
                            <span className={styles.O_title}>Delivery</span>
                            <span
                              className={`${styles.O_price} ${styles.O_title_otput}`}
                            >
                              Free Delivery
                            </span>
                          </div>
                          <div className={styles.O_totlecost}>
                            <span className={styles.O_title}>Total</span>
                            <span className={styles.O_price}>$156</span>
                          </div>
                          <ul>
                            <li>
                              <button
                                type="submit"
                                className={`${styles["checkout-btn"]} ${styles.red_btn} ${styles.trans} ${styles["hvr-float-shadow"]}`}
                                name="checkout"
                              >
                                Place Order
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
      {displayAlert && (
        <Alert message="You have to login first" onClose={hideAlert} />
      )}
    </div>
  );
};

export default CheckOutDetails;
