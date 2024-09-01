import { FoodCategoryProps, useFoodCategory } from "./useFoodCategory";
const FoodCategory: React.FC<FoodCategoryProps> = (props) => {
  const { handleFoodCategory, isActive, icon, description, title } =
    useFoodCategory(props);

  return (
    <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
      <li className="nav-item">
        <a
          onClick={handleFoodCategory}
          className={`d-flex align-items-center text-start mx-3 ms-0 pb-3 ${
            isActive ? "active" : ""
          }`}
          data-bs-toggle="pill"
          href="#tab-1"
        >
          <i className={`fa ${icon} fa-2x text-primary`} />
          <div className="ps-3">
            <small className="text-body">{description}</small>
            <h6 className="mt-n1 mb-0">{title}</h6>
          </div>
        </a>
      </li>
    </ul>
  );
};

export default FoodCategory;
