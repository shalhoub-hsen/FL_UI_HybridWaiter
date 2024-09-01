import React from "react";
import styles from "../../../../Order.module.css";
import {
  OrderFoodCategoryProps,
  useOrderFoodCategory,
} from "./useOrderFoodCategory";

const OrderFoodCategory: React.FC<OrderFoodCategoryProps> = (props) => {
  const { id, description, icon, isActive, title, handleFoodCategory } =
    useOrderFoodCategory(props);

  return (
    <ul className={`${styles.nav} ${styles["nav-tabs"]}`} role="tablist">
      <li className="nav-item">
        <a
          onClick={handleFoodCategory}
          style={{ cursor: "pointer" }}
          className={`${styles["nav-link"]} ${
            isActive ? `${styles.active}` : ""
          } trans`}
          data-toggle="tab"
          title="Pizza"
        >
          <span className="icon">{title}</span>
        </a>
      </li>
    </ul>
  );
};

export default OrderFoodCategory;
