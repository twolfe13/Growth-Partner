import { RouterProvider } from "react-router-dom";
import router from "./browserRouter";

const MainRoutes = () => {
  return <RouterProvider router={router} />;
};

export default MainRoutes;
