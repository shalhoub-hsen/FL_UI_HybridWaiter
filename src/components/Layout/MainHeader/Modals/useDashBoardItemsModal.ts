import { AsyncThunkAction } from "@reduxjs/toolkit";
import { saveFoodMenu } from "actions/foodMenu.action";
import { IFoodMenu } from "models/IFoodMenu";
import { useEffect, useState, useMemo } from "react";
import { useAppDispatch } from "hooks/redux";
import { IMenuTable } from "models/IMenuTable";
import { useFoodMenuState } from "reducers/foodMenu.reducer";
export interface DashBoardItemsModalProps {
  showModal: boolean;
  onCloseModal: () => void;
  // price? :string;
  // category?: string;
  // name?: string;
  // imageURL?: string;
  editItem: IMenuTable;
  setEditItem: (value: IMenuTable) => void;
}
export interface EditItem {
  price: string;
  name: string;
  category: string;
  imageURL: string;
  parentId: number;
}

export const useDashBoardItemsModal = (props: DashBoardItemsModalProps) => {
  const dispatch = useAppDispatch();
  const { editItem } = props;
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const foodMenuState = useFoodMenuState();

  const { foodMenu } = foodMenuState;

  // const foodMenuCategories = useMemo(
  //   () => foodMenu.filter((x) => x.parentId == null),
  //   [foodMenu]
  // );
  const foodMenuCategories = useMemo(() => {
    const defaultCategory = { id: -1, parentId: null, name: "Select Category" }; // Your default value
    return [defaultCategory, ...foodMenu.filter((x) => x.parentId == null)];
  }, [foodMenu]);

  const [foodCategory, setSelectedFoodCategory] = useState<number>(-1);

  useEffect(() => {
    setSelectedFoodCategory(props.editItem.parentId);
    //console.log("foodCategory is ", editItem.parentId);
  }, []);

  const onFinalClose = () => {
    props.onCloseModal();
  };

  const onValueChange = (key: string, value: string) => {
    const updatedEditItem: IMenuTable = {
      ...props.editItem,
      [key]: value,
    };
    if (key.toLowerCase() == "parentid") {
      setSelectedFoodCategory(Number(value));
    }
    props.setEditItem(updatedEditItem);
  };

  // const categoryParentId: Record<string, number> = {
  //   hmaburger: 3,
  //   pizza: 4,
  //   beverages: 5,
  // };

  const onSaveFoodMenu = (event: React.FormEvent) => {
    event.preventDefault();
    //let parentId = categoryParentId[editItem.category.toLowerCase()];
    const newFoodMenu: IFoodMenu = {
      id: editItem.id,
      parentId: Number(editItem.parentId),
      price: Number(editItem.price),
      description: "",
      imageURL: editItem.imageURL,
      icon: "",
      name: editItem.name,
    };
    //console.log(newFoodMenu);
    if (newFoodMenu.parentId === -1) {
      alert("Please select a food category.");
      return;
    }
    //return;
    dispatch(saveFoodMenu(newFoodMenu));
    props.onCloseModal();
  };
  return {
    ...props,
    customStyles,
    onFinalClose,
    onValueChange,
    onSaveFoodMenu,
    foodCategory,
    foodMenuCategories,
    setSelectedFoodCategory,
  };
};
