import React from "react";
import { CartProps, useCart } from "./useCart";
import styles from "Order.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ScreenHeader from "components/Layout/ScreenHeader/ScreenHeader";
import { useViewFile } from "hooks/useViewFile";

const Cart: React.FC<CartProps> = (props) => {
  const { foodMenu, onAddItem, onRemoveItem, onRemoveWholeItem } =
    useCart(props);
  return (
    <>
      <ScreenHeader PageName={"Cart"} ItemName={"Cart"} />
      <div className={styles.wrapper}>
        <section>
          <div className={styles.main_cart}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className={styles.main_Ourmenu}>
                    <h2 className={styles.title}>Cart</h2>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className={styles.cart_list}>
                    <ul className={styles.inner_cartlist}>
                      <li className={styles.header}>
                        <div className={styles.main_head}>
                          <div className={styles.edit}>&nbsp;</div>
                          <div className={styles.pro_name}>
                            <h4>Product</h4>
                          </div>
                          <div className={styles.pro_qty}>
                            <h4>Qty</h4>
                          </div>
                          <div className={styles.pro_price}>
                            <h4>Price</h4>
                          </div>
                          <div className={styles.pro_total}>
                            <h4>Total</h4>
                          </div>
                        </div>
                      </li>
                      {foodMenu.map((val, index) => {
                        return (
                          <React.Fragment key={index}>
                            <li className="rows">
                              <div className={styles.edit}>
                                <div className={styles.edit_div}>
                                  <a
                                    className={`${styles.trans} ${styles.del}`}
                                    title="Delete"
                                    onClick={() => {
                                      onRemoveWholeItem(val.item);
                                    }}
                                  >
                                    <i
                                      className="fa fa-times"
                                      aria-hidden="true"
                                    />
                                  </a>
                                  <a
                                    href="#"
                                    className={`${styles.trans} ${styles.edit_new}`}
                                    title="Edit"
                                  >
                                    <i
                                      className="fa fa-pencil"
                                      aria-hidden="true"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className={styles.pro_name}>
                                <div className={styles.products}>
                                  <div
                                    className={styles.pro_img}
                                    style={{ height: "100px" }}
                                  >
                                    <img
                                      src={useViewFile(val.item.imageURL)}
                                      className={styles.absoImg}
                                      alt=""
                                    />
                                  </div>
                                  <div className={styles.pro_descr}>
                                    <h3 className={styles.pro_title}>
                                      <a
                                        href="#"
                                        title="Mexican Pizza"
                                        className={styles.trans}
                                      >
                                        {val.item.name}
                                      </a>
                                    </h3>
                                    <p className={styles.pro_dtls}>
                                      {val.item.description}
                                    </p>
                                    {/* <p className={styles.size}>
                                      <span className={styles.size}>
                                        Size :
                                      </span>
                                      Medium
                                    </p> */}
                                  </div>
                                </div>
                              </div>
                              <div className={styles.pro_qty}>
                                <div className={styles["number-input"]}>
                                  <button
                                    onClick={() => {
                                      onAddItem(val.item);
                                    }}
                                    className={styles.plus}
                                  />
                                  <input
                                    className="quantity"
                                    min={0}
                                    name="quantity"
                                    value={val.count}
                                    type="number"
                                  />
                                  <button
                                    onClick={() => {
                                      onRemoveItem(val.item);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className={styles.pro_price}>
                                <h4>${val.item.price}</h4>
                              </div>
                              <div className={styles.pro_total}>
                                <h4>${val.item.price * val.count}</h4>
                              </div>
                            </li>
                          </React.Fragment>
                        );
                      })}
                    </ul>
                    <div className={styles.coupan_block}>
                      <div className={styles.Redio_diltype}>
                        <ul>
                          <li>
                            <input
                              type="radio"
                              id="Delivery"
                              name="deliver_type"
                              defaultValue="male"
                              defaultChecked
                            />
                            <label htmlFor="Delivery">Delivery</label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              id="takeaway"
                              name="deliver_type"
                              defaultValue="female"
                            />
                            <label htmlFor="takeaway">Take Away</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className={styles.checkout}>
                      <p className={styles.order_dscr}>Order with Delivery</p>
                      <p className={styles.order_total}>
                        <span>Total :</span> ${" "}
                        {foodMenu.reduce(
                          (total, obj) => total + obj.count * obj.item.price,
                          0
                        )}
                      </p>
                      <div className={styles.btn_checkout}>
                        <a
                          href="/order"
                          className={`${styles.trans} ${styles.gray_btn} hvr-ripple`}
                          title="Update Cart"
                        >
                          Update Cart{" "}
                        </a>
                        <Link
                          to="/checkout"
                          className={`${styles.trans} ${styles.red_btn} squre-btn ${styles["hvr-ripple-out"]}`}
                          title="Proceed to Checkout"
                        >
                          Proceed to Checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
