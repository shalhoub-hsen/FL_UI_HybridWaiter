import { IFoodMenu } from "models/IFoodMenu";
import { http } from "utils/http";

const getFoodMenu = async () => {
  return await http.get<IFoodMenu[], any>("FoodMenu");
};
const saveFoodMenu = async (foodMenu: IFoodMenu) => {
  return await http.post<IFoodMenu, boolean>("FoodMenu/Save", foodMenu);
};
const deleteFoodMenu = async (foodMenuId: number) => {
  return await http.delete<IFoodMenu, boolean>(
    "FoodMenu/Delete?id=" + foodMenuId
  );
};
const FoodMenuServices = {
  getFoodMenu,
  saveFoodMenu,
  deleteFoodMenu,
};

export default FoodMenuServices;
