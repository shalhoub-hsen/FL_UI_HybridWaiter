import { useViewFile } from "hooks/useViewFile";
import { FoodItemProps, useFoodItem } from "./useFoodItem";
const FoodItem: React.FC<FoodItemProps> = (props) => {
  const { imgSrc, itemName, price, description } = useFoodItem(props);

  return (
    <>
      <div className="col-lg-6">
        <div className="d-flex align-items-center">
          <img
            className="flex-shrink-0 img-fluid rounded"
            src={useViewFile(imgSrc)}
            alt=""
            style={{ width: "80px" }}
          />
          <div className="w-100 d-flex flex-column text-start ps-4">
            <h5 className="d-flex justify-content-between border-bottom pb-2">
              <span>{itemName}</span>
              <span className="text-primary">{price}$</span>
            </h5>
            <small className="fst-italic">{description}</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
