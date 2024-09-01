import React from "react";
import { DashboardItemsProps, useDashboardItems } from "./useDashboardItems";
import { useViewFile } from "hooks/useViewFile";
const DashBoardItems: React.FC<DashboardItemsProps> = (props) => {
  const { onEdit, onDelete, category, name, price, imageSrc } =
    useDashboardItems(props);
  return (
    <tr>
      {/* <td>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" />
        </div>
      </td> */}
      <td>{category}</td>
      <td>{name}</td>
      <td>{price}$</td>
      <td>
        <img
          className="item-image"
          src={useViewFile(imageSrc)}
          alt={name}
          style={{ width: "50px" }}
        />
      </td>
      <td className="actions">
        <button
          onClick={(e) => {
            onEdit();
          }}
          className="btn btn-sm btn-outline-primary me-2"
        >
          <i className="fas fa-edit"></i>
        </button>
        <button
          onClick={(e) => {
            onDelete();
          }}
          className="btn btn-sm btn-outline-danger"
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
};

export default DashBoardItems;
