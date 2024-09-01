import { useEffect, useState } from "react";
import { useAppDispatch } from "hooks/redux";
import { useMenuTableState } from "reducers/menuTable.reducer";
import { getMenuTable } from "actions/menuTable.action";
import { log } from "console";
import { IMenuTable } from "models/IMenuTable";
import { deleteFoodMenu } from "actions/foodMenu.action";
export interface DashBoardPageProps {}

export const useDashBoardPage = (props: DashBoardPageProps) => {
  // const items = [
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

  const dispatch = useAppDispatch();
  const menuTableState = useMenuTableState();
  const { menuTable } = menuTableState;
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState<IMenuTable>();
  const onCloseModal = () => {
    setShowModal(false);
  };
  const handleEdit = (itemId: number) => {
    //const editMenu = menuTable.filter((x: IMenuTable) => x.id === itemId);
    console.log("handling new item", itemId);
    let editMenu: IMenuTable | undefined;
    if (itemId == 0) {
      setEditItem({
        id: 0,
        category: "",
        name: "",
        price: "",
        imageURL: "",
        parentId: -1,
      });
    } else {
      editMenu = menuTable.filter((x: IMenuTable) => x.id === itemId)[0];
      setEditItem(editMenu);
    }

    setShowModal(true);
    // console.log(
    //   "Editing item:",
    //   menuTable.filter((x) => x.id == itemId)
    // );
    //console.log("Editing item:", editItem);
  };
  const handleDelete = (itemId: number) => {
    //console.log("handling new item", itemId);
    dispatch(deleteFoodMenu(itemId));
  };
  useEffect(() => {
    dispatch(getMenuTable());
    //console.log("the table is ", menuTable);
  }, []);
  useEffect(() => {
    dispatch(getMenuTable());
  }, [onCloseModal, handleDelete]);
  return {
    ...props,
    menuTable,
    handleEdit,
    handleDelete,
    showModal,
    onCloseModal,
    editItem,
    setEditItem,
  };
};

//export interface TeamMembersListProps {}
