import { IMenuTable } from "models/IMenuTable";
import { http } from "utils/http";

const getMenuTable = async () => {
  return await http.get<IMenuTable[], any>("FoodMenu/GetMenuTable");
};

const MenuTableServices = {
  getMenuTable,
};

export default MenuTableServices;
