import React from "react";
import styles from "../../../../Order.module.css";

import { OrderFoodItemProps, useOrderFoodItem } from "./useOrderFoodItem";
import { useViewFile } from "hooks/useViewFile";

const OrderFoodItem: React.FC<OrderFoodItemProps> = (props) => {
  const { categoryId, description, imgSrc, itemName, price, addtoCart } =
    useOrderFoodItem(props);

  return (
    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
      <div className={styles.P_itmesbox}>
        <div className={styles.PT_image}>
          <img src={useViewFile(imgSrc)} className={styles.absoImg} alt="" />
        </div>
        <div className={styles.PT_dscr}>
          <h3 className={styles.PT_title}>{itemName}</h3>
          <p className={styles.PT_dtls}> {description}</p>
          <div className={styles.price_block}>
            <div className={styles.price}>${price}</div>
            <a className={styles.card_btn} onClick={addtoCart}>
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFoodItem;
