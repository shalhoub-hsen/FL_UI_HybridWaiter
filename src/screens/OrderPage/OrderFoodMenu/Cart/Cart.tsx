import React from "react";
import { CartProps, useCart } from "./useCart";
import styles from "../../../../Order.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Cart: React.FC<CartProps> = (props) => {
  const { foodMenu, onClearCart } = useCart(props);
  return (
    <div className={`${styles.right_cntbar} col-lg-3 `}>
      <div className={styles.your_order}>
        <div className={styles.Order_title}>
          <span className={styles.O_lefttitle}>Your order </span>
          <span className={styles.O_cart}>
            <a href="#" className={styles.trans} title="Add To Cart" />
          </span>
        </div>
        <div className={styles.Order_number}>
          <ul>
            {foodMenu.map((val, index) => {
              return (
                <React.Fragment key={index}>
                  <li>
                    <div className={styles.Order_number}>
                      <div className={styles.Order_names}>
                        <span className={styles.O_name}>
                          {val.count}x {val.item.name}
                        </span>
                        <span className={styles.O_type}>
                          {val.item.description}
                        </span>
                      </div>
                      <div className={styles.Order_price}>
                        <span className={styles.O_price}>
                          ${val.count * val.item.price}
                        </span>
                      </div>
                    </div>
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </div>
        <div className={styles.totle_Oamount}>
          <div className={styles.O_totlecost}>
            <span className={styles.O_title}>Total</span>
            <span className={styles.O_price}>
              {foodMenu.reduce(
                (total, obj) => total + obj.count * obj.item.price,
                0
              )}
            </span>
          </div>
          <Link
            to="/cart"
            className={`${styles.trans} ${styles.red_btn} ${styles["squre-btn"]} ${styles["hvr-ripple-out"]} `}
            style={{ width: "60%" }}
          >
            Order Now
          </Link>
          <Button
            className={`${styles.trans} ${styles.red_btn} ${styles["squre-btn"]} `}
            style={{ width: "35%", marginLeft: "5%", fontSize: "15px" }}
            onClick={onClearCart}
          >
            Empty Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
