import React from "react";
import styles from "../../../Order.module.css";
import { Link } from "react-router-dom";
import { OrderFoodMenuProps, useOrderFoodMenu } from "./useOrderFoodMenu";
import OrderFoodCategory from "./OrderFoodCategory/OrderFoodCategory";
import OrderFoodItem from "./OrderFoodItem/OrderFoodItem";
import Cart from "./Cart/Cart";
const OrderFoodMenu: React.FC<OrderFoodMenuProps> = (props) => {
  const {
    foodMenuCategories,
    selectedFoodMenu,
    foodCategory,
    onCategoryChange,
    onAddToCart,
  } = useOrderFoodMenu(props);
  return (
    <div className={styles.wrapper}>
      <section>
        <div className={styles.Our_menu}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className={styles.main_Ourmenu}>
                  <div
                    className={`${styles.content_menu} ${styles.bottom_pitch}`}
                  >
                    <div className={styles.main_bpitch}>
                      {foodMenuCategories.map((val, index) => {
                        return (
                          <>
                            <OrderFoodCategory
                              id={val.id}
                              icon={val.icon}
                              description={val.description}
                              title={val.name}
                              isActive={foodCategory == val.id}
                              handleFoodCategory={() => {
                                onCategoryChange(val.id);
                              }}
                            />
                          </>
                        );
                      })}
                    </div>
                  </div>
                  <div className="tab-content">
                    <div className="content_row">
                      <div className={styles.left_cntbar}>
                        <div className="pizza_items">
                          <div className="row">
                            {selectedFoodMenu.map((val, index) => {
                              return (
                                <>
                                  <OrderFoodItem
                                    categoryId={val.parentId}
                                    imgSrc={val.imageURL}
                                    itemName={val.name}
                                    price={val.price}
                                    description={val.description}
                                    addtoCart={() => {
                                      onAddToCart(val);
                                    }}
                                  />
                                </>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderFoodMenu;
