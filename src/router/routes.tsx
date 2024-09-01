import { RouteObject, useRoutes } from "react-router-dom";

// routes
import MainRoutes from "./MainRoutes";

const Routes: React.FC = () => {
  const routes: RouteObject[] = [MainRoutes];
  return useRoutes(routes);
};

export default Routes;
