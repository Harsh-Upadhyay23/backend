import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Body from "../components/Body";
import AddEmployee from "../components/AddEmployee";
import Maincard from "../components/Maincard";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/employee/:id",
        element: <Maincard />,
      },
      {
        path: "/add-employee",
        element: <AddEmployee />,
      },
    ],
  },
]);

export default appRouter;
