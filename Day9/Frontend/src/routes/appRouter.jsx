import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Body from "../components/Body";


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
      }
    ],
  },
]);

export default appRouter;