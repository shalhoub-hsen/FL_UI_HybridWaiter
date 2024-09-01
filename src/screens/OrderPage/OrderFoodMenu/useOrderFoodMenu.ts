import { addToCart } from "actions/cart.action";
import { getFoodMenu } from "actions/foodMenu.action";
import { useAppDispatch } from "hooks/redux";
import { IFoodMenu } from "models/IFoodMenu";
import { useEffect, useMemo, useState } from "react";
import { useFoodMenuState } from "reducers/foodMenu.reducer";

export interface OrderFoodMenuProps {}

export const useOrderFoodMenu = (props: OrderFoodMenuProps) => {
  const dispatch = useAppDispatch();

  const foodMenuState = useFoodMenuState();
  const { foodMenu } = foodMenuState;

  const foodMenuCategories = useMemo(
    () => foodMenu.filter((x) => x.parentId == null),
    [foodMenu]
  );

  const [selectedFoodMenu, setSelectedFoodMenu] = useState(
    foodMenuCategories.length > 0
      ? foodMenu.filter((x) => x.parentId == foodMenuCategories[0].id)
      : []
  );

  const [foodCategory, setSelectedFoodCategory] = useState<number>(
    foodMenuCategories.length > 0 ? foodMenuCategories[0].id : -1
  );

  const onCategoryChange = (parentId: number) => {
    setSelectedFoodCategory(parentId);
    setSelectedFoodMenu(foodMenu.filter((x) => x.parentId == parentId));
  };

  const onAddToCart = (item: IFoodMenu) => {
    dispatch(addToCart(item));
  };

  useEffect(() => {
    dispatch(getFoodMenu());
  }, []);

  return {
    ...props,
    selectedFoodMenu,
    onCategoryChange,
    foodCategory,
    foodMenuCategories,
    onAddToCart,
  };
};
