export interface OrderFoodItemProps {
  categoryId: number;
  imgSrc: string;
  itemName: string;
  price: number;
  description: string;
  addtoCart: () => void;
}

export const useOrderFoodItem = (props: OrderFoodItemProps) => {
  return { ...props };
};
