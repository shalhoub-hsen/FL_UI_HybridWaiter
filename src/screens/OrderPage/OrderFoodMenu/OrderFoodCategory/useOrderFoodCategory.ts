export interface OrderFoodCategoryProps {
  id: number;
  icon: string;
  description: string;
  title: string;
  isActive: boolean;
  handleFoodCategory: () => void;
}

export const useOrderFoodCategory = (props: OrderFoodCategoryProps) => {
  return { ...props };
};
