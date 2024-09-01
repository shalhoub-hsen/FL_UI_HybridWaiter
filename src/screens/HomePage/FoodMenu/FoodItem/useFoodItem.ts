export interface FoodItemProps {
  categoryId: number;
  imgSrc: string;
  itemName: string;
  price: number;
  description: string;
}

export const useFoodItem = (props: FoodItemProps) => {
  return { ...props };
};
