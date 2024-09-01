import { Avatar, Box, ButtonBase } from "@mui/material";
// assets
import { IconMenu2 } from "@tabler/icons";
import { MainHeaderProps, useMainHeader } from "./useMainHeader";
import { Outlet, Link } from "react-router-dom";
import kutabAudol from "./../../../assets/images/kutabAudol.png";
import SignInModal from "./Modals/SignInModal";
import Alert from "components/Alert/Alert";
const MainHeader: React.FC<MainHeaderProps> = (props) => {
  const {
    children,
    title,
    theme,
    isOpen,
    onOpenMenu,
    isAuthenticated,
    username,
    showModal,
    handleRegistration,
    onCloseModal,
    handleLogout,
  } = useMainHeader(props);

  return (
    <>
      <div className="container-xxl position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark px-4 px-lg-5 py-3 py-lg-0">
          <a className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fa fa-utensils me-3" />
              Restoran
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 pe-4">
              {/* <Link to="/signIn" className="nav-item nav-link">LogIn</Link> */}
              <Link to="/home" className="nav-item nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
              <Link to="/service" className="nav-item nav-link">
                Service
              </Link>
              <Link to="/menu" className="nav-item nav-link">
                Menu
              </Link>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu m-0">
                  <Link to="/booking" className="dropdown-item">
                    Booking
                  </Link>
                  <Link to="/ourteam" className="dropdown-item">
                    Our Team
                  </Link>
                  <Link to="/testimonial" className="dropdown-item">
                    Testimonial
                  </Link>
                </div>
              </div>
              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link>
              <Link to="/order" className="nav-item nav-link">
                Order
              </Link>
            </div>
            <Link to="/booking" className="btn btn-primary py-2 px-4">
              Book A Table
            </Link>
            <Link to="/adminstrator" className="btn btn-primary py-2 px-4">
              Dashboard
            </Link>
            {isAuthenticated ? (
              <>
                <div className="nav-item">
                  <a className="nav-link">Welcome Back {username}</a>
                </div>
                <button
                  className="btn btn-primary py-2 px-4"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                className="btn btn-primary py-2 px-4"
                onClick={handleRegistration}
              >
                Login
              </button>
            )}
          </div>
        </nav>
      </div>
      {!isAuthenticated && showModal && (
        <SignInModal showModal={showModal} onCloseModal={onCloseModal} />
      )}
    </>
  );
};

export default MainHeader;
