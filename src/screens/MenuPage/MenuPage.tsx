import React from 'react'
import Paper from "components/Paper/Paper"
import ScreenHeader from 'components/Layout/ScreenHeader/ScreenHeader';
import FoodMenu from "../HomePage/FoodMenu/FoodMenu";
const MenuPage = () => {
  return (
    <Paper title="">
      <div className="container-xxl bg-white p-0">
        <ScreenHeader
        PageName = {'Menu'}
        ItemName={'MENU'}
        />
        <FoodMenu />
      </div>
      </Paper>
  )
}

export default MenuPage
