import { getFoodMenu } from "actions/foodMenu.action";
import { useAppDispatch } from "hooks/redux";
import { IFoodMenu } from "models/IFoodMenu";
import React, { useState, useEffect, useMemo } from "react";
import { useFoodMenuState } from "reducers/foodMenu.reducer";
export interface FoodMenuProps {}

export const useFoodMenu = (props: FoodMenuProps) => {
  const dispatch = useAppDispatch();

  const foodMenuState = useFoodMenuState();
  const { foodMenu } = foodMenuState;

  // const listCategories = [
  //   {
  //     id: 3,
  //     icon: "fa-coffee",
  //     description: "Popular",
  //     title: "Breakfast",
  //     isActive: true,
  //   },
  //   {
  //     id: 4,
  //     icon: "fa-hamburger",
  //     description: "Special",
  //     title: "Launch",
  //     isActive: false,
  //   },
  //   {
  //     id: 5,
  //     icon: "fa-utensils",
  //     description: "Lovely",
  //     title: "Dinner",
  //     isActive: false,
  //   },
  // ];

  const foodMenuCategories = useMemo(
    () => foodMenu.filter((x) => x.parentId == null),
    [foodMenu]
  );

  const [selectedFoodMenu, setSelectedFoodMenu] = useState<IFoodMenu[]>([]);

  const [foodCategory, setSelectedFoodCategory] = useState<number>(
    // foodMenuCategories[0].id
    -1
  );

  const onCategoryChange = (parentId: number) => {
    setSelectedFoodCategory(parentId);
    setSelectedFoodMenu(foodMenu.filter((x) => x.parentId == parentId));
  };

  useEffect(() => {
    dispatch(getFoodMenu());
  }, []);

  useEffect(() => {
    if (foodMenu.length > 0 && foodMenuCategories.length > 0) {
      setSelectedFoodMenu(
        foodMenu.filter((x) => x.parentId == foodMenuCategories[0].id)
      );
      setSelectedFoodCategory(foodMenuCategories[0].id);
    }
  }, [foodMenu, foodMenuCategories]);

  return {
    ...props,
    //listCategories,
    selectedFoodMenu,
    onCategoryChange,
    foodCategory,
    foodMenuCategories,
  };
};
