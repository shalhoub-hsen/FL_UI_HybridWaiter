import { useAppDispatch } from "hooks/redux";
import { useCallback } from "react";
export interface DashboardItemsProps {
  category: string;
  name: string;
  price: string;
  imageSrc: string;
  onEdit: () => void;
  onDelete: () => void;
}
// const items= [
//   {
//     category: "Hamburger",
//     name: "Chicken Burger",
//     price: "$5.99",
//     imageSrc: "https://via.placeholder.com/50",
//   },
//   {
//     category: "Hamburger",
//     name: "Grand Tasty",
//     price: "$6.99",
//     imageSrc: "https://via.placeholder.com/50",
//   },
//   {
//     category: "Beverage",
//     name: "Coke",
//     price: "$1.99",
//     imageSrc: "https://via.placeholder.com/50",
//   },
//   {
//     category: "Beverage",
//     name: "Sprite",
//     price: "$1.99",
//     imageSrc: "https://via.placeholder.com/50",
//   },
//   {
//     category: "Pizza",
//     name: "Margherita",
//     price: "$8.99",
//     imageSrc: "https://via.placeholder.com/50",
//   },
//   {
//     category: "Pizza",
//     name: "Pepperoni",
//     price: "$9.99",
//     imageSrc: "https://via.placeholder.com/50",
//   },
// ];
export const useDashboardItems = (props: DashboardItemsProps) => {
  //const dispatch = useAppDispatch();
  //const { category, name, price, imageSrc } = props;

  // const handleEdit = useCallback(() => {
  //   console.log("Editing item:", { category, name, price, imageSrc });
  //   if (onEdit) {
  //     onEdit();
  //   }
  // }, [category, name, price, imageSrc, onEdit]);

  return { ...props };
};
