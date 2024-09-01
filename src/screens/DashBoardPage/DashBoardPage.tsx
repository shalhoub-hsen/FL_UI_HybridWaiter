import React from "react";
import ScreenHeader from "components/Layout/ScreenHeader/ScreenHeader";
import Paper from "components/Paper/Paper";
import DashBoardItems from "./DashBoardItems/DashBoardItems";
import { DashBoardPageProps, useDashBoardPage } from "./useDashBoardPage";
import { IMenuTable } from "models/IMenuTable";
import DashBoardItemsModal from "components/Layout/MainHeader/Modals/DashBoardItemsModal";
import { Button } from "@mui/material";
const DashBoardPage: React.FC<DashBoardPageProps> = (props) => {
  const {
    menuTable,
    handleEdit,
    handleDelete,
    showModal,
    onCloseModal,
    editItem,
    setEditItem,
  } = useDashBoardPage(props);

  return (
    <Paper title="">
      <div className="container-xxl bg-white p-0">
        <ScreenHeader PageName={"DashBoard"} ItemName={"Dashboard"} />
        {/* <DashBoardItems /> */}
        <div>
          <div className="row">
            <h1 className="col-8">Items List</h1>
            <Button
              style={{ backgroundColor: "green", color: "white" }}
              className="col-4"
              onClick={() => handleEdit(0)}
            >
              Add Item
            </Button>
          </div>
          <table className="table">
            <thead>
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">Category</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Image</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {menuTable.map((val, index) => {
                return (
                  <React.Fragment key={index}>
                    <DashBoardItems
                      category={val.category}
                      name={val.name}
                      price={val.price}
                      imageSrc={val.imageURL}
                      onEdit={() => handleEdit(val.id)}
                      onDelete={() => handleDelete(val.id)}
                    />
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
          {showModal && editItem && (
            <DashBoardItemsModal
              showModal={showModal}
              onCloseModal={onCloseModal}
              editItem={editItem}
              setEditItem={setEditItem}
            />
          )}
        </div>
      </div>
    </Paper>
  );
};

export default DashBoardPage;
{
  /* {items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{item.category}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <img
                      className="item-image"
                      src={item.imageSrc}
                      alt={item.name}
                    />
                  </td>
                  <td className="actions">
                    <button>
                      <i className="fas fa-edit"></i>
                    </button>
                    <button>
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))} */
}
