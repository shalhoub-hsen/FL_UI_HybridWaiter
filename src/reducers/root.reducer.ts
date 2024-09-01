import { combineReducers } from "@reduxjs/toolkit";
import menuTableReducer from "./menuTable.reducer";
import foodMenuReducer from "./foodMenu.reducer";
import serviceListReducer from "./serviceList.reducer";
import teamMemberReducer from "./teamMember.reducer";
import cartReducer from "./cart.reducer";
import authenticationReducer from "./authentication.reducer";

const rootReducer = combineReducers({
  menuTableReducer,
  foodMenuReducer,
  serviceListReducer,
  teamMemberReducer,
  cartReducer,
  authenticationReducer,
});

export default rootReducer;
