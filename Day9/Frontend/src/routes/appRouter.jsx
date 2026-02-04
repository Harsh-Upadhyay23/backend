import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Body from "../components/Body";
import AddEmployee from "../components/AddEmployee";


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
        element: <Body />,
      },
      {
        path: "/add-employee",
        element: <AddEmployee />,
      }
    ],
  },
]);

export default appRouter;