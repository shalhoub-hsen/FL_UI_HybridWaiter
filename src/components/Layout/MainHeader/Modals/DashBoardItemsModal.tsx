import React from "react";
import {
  DashBoardItemsModalProps,
  useDashBoardItemsModal,
} from "./useDashBoardItemsModal";
import { Modal } from "react-responsive-modal";
import { display } from "@mui/system";
import { useViewFile } from "hooks/useViewFile";

const DashBoardItemsModal: React.FC<DashBoardItemsModalProps> = (props) => {
  const {
    customStyles,
    onFinalClose,
    editItem,
    setEditItem,
    onValueChange,
    onSaveFoodMenu,
    foodCategory,
    foodMenuCategories,
    setSelectedFoodCategory,
  } = useDashBoardItemsModal(props);
  return (
    <Modal open={true} onClose={onFinalClose}>
      <h2>Item</h2>
      <form
        onSubmit={(event) => {
          onSaveFoodMenu(event);
        }}
      >
        <div
          className="col-12"
          style={{ display: "flex", alignItems: "baseline" }}
        >
          <label className="col-4">Category Name:</label>
          {/* <input
            style={{
              textAlign: "center",
            }}
            type="text"
            value={editItem?.category}
            onChange={(e) => onValueChange("category", e.target.value)}
          /> */}

          <select
            className="form-select"
            value={foodCategory}
            onChange={(e) =>
              onValueChange(
                "parentId",
                e.target.value === "-1" ? "-1" : e.target.value
              )
            }
          >
            {foodMenuCategories.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        <br />
        <label>Item Name:</label>
        <input
          type="text"
          value={editItem?.name}
          //value=""
          onChange={(e) => onValueChange("name", e.target.value)}
        />

        <br />
        <label>
          Price:
          <input
            type="text"
            value={editItem?.price}
            onChange={(e) => onValueChange("price", e.target.value)}
          />
        </label>
        <br />
        <label>
          Image:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => onValueChange("imageURL", e.target.value)}
          />
          <img
            style={{ width: "50px" }}
            src={useViewFile(editItem?.imageURL ?? "")}
            alt="Loaded Image"
          />
        </label>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            columnGap: "1rem",
          }}
        >
          <button style={{ padding: "0.5rem" }} type="submit">
            Submit
          </button>
          <button
            style={{ padding: "0.5rem" }}
            type="button"
            onClick={onFinalClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default DashBoardItemsModal;
