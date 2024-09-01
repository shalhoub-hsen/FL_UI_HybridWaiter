import React from "react";
import FoodCategory from "./FoodCategory/FoodCategory";
import FoodItem from "./FoodItem/FoodItem";
import { FoodMenuProps, useFoodMenu } from "./useFoodMenu";
const FoodMenu: React.FC<FoodMenuProps> = (props) => {
  const {
    foodCategory,
    foodMenuCategories,
    selectedFoodMenu,
    onCategoryChange,
  } = useFoodMenu(props);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            Food Menu
          </h5>
          <h1 className="mb-5">Most Popular Items</h1>
        </div>
        <div
          className="tab-class text-center wow fadeInUp"
          data-wow-delay="0.1s"
        >
          {foodMenuCategories.map((val, index) => {
            return (
              <React.Fragment key={index}>
                <FoodCategory
                  id={val.id}
                  icon={val.icon}
                  description={val.description}
                  title={val.name}
                  isActive={foodCategory == val.id}
                  handleFoodCategory={() => {
                    onCategoryChange(val.id);
                  }}
                />
              </React.Fragment>
            );
          })}
          <div className="tab-content">
            <div className="tab-pane fade show p-0 active">
              <div className="row g-4">
                {selectedFoodMenu.map((val, index) => {
                  return (
                    <React.Fragment key={index}>
                      <FoodItem
                        categoryId={val.parentId}
                        imgSrc={val.imageURL}
                        itemName={val.name}
                        price={val.price}
                        description={val.description}
                      />
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
