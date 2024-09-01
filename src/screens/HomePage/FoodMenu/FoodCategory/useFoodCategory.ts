export interface FoodCategoryProps {
  id: number;
  handleFoodCategory: () => void;
  icon: string;
  description: string;
  title: string;
  isActive: boolean;
}

export const useFoodCategory = (props: FoodCategoryProps) => {
  return { ...props };
};
