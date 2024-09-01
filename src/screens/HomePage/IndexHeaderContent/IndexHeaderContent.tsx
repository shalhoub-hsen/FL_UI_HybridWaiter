import {
  IndexHeaderContentProps,
  useIndexHeaderContent,
} from "./useIndexHeaderContent";
import hero from "../../../assets/images/hero.png";
const IndexHeaderContent: React.FC<IndexHeaderContentProps> = (props) => {
  //const { title, lookups, onView } = useIndexHeaderContent(props);

  return (
    <div className="container-xxl py-5 bg-dark hero-header mb-5">
      <div className="container my-5 py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-3 text-white animated slideInLeft">
              Enjoy Our
              <br />
              Delicious Meal
            </h1>
            <p className="text-white animated slideInLeft mb-4 pb-2">
              Everyone Deserves A Relaxing & Sumptuous Weekend To Unwind! Spend
              Yours at our Restaurant with Chef's special tangy and tasty dishes
              that will surely make your mouth watered!!!
            </p>
            {/* <a className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">
              Book A Table
            </a> */}
          </div>
          <div className="col-lg-6 text-center text-lg-end overflow-hidden">
            <img className="img-fluid" src={hero} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexHeaderContent;
