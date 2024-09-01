import { Children, lazy } from "react";
import Loadable from "utils/Loadable";
import Page from "components/Layout/Page/Page";
import { Routes, Route, Navigate } from "react-router-dom";
import ServicePage from "screens/ServicePage/ServicePage";
import MenuPage from "screens/MenuPage/MenuPage";
import BookPage from "screens/BookPage/BookPage";
import TeamMembersPage from "screens/TeamPage/TeamPage";
import TeamPage from "screens/TeamPage/TeamPage";
import FeedbackPage from "screens/FeedbackPage/FeedbackPage";
import ContactPage from "screens/ContactPage/ContactPage";
import OrderPage from "screens/OrderPage/OrderPage";
import Cart from "screens/Cart/Cart";
import CheckOutPage from "screens/CheckOutPage/CheckOutPage";
import DashBoardPage from "screens/DashBoardPage/DashBoardPage";
const HomePage = Loadable(lazy(() => import("screens/HomePage/HomePage")));
const AboutPage = Loadable(lazy(() => import("screens/AboutPage/AboutPage")));

const MainRoutes = {
  path: "/",
  element: <Page title="welcome" />,
  children: [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/service",
      element: <ServicePage />,
    },
    {
      path: "/menu",
      element: <MenuPage />,
    },
    {
      path: "/booking",
      element: <BookPage />,
    },
    {
      path: "/adminstrator",
      element: <DashBoardPage />,
    },
    {
      path: "/ourteam",
      element: <TeamPage />,
    },
    {
      path: "/testimonial",
      element: <FeedbackPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
    {
      path: "/order",
      element: <OrderPage />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/checkout",
      element: <CheckOutPage />,
    },
  ],
};

export default MainRoutes;
