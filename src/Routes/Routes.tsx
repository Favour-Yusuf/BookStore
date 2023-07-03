import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../Components";
import { HomeScreen } from "../Pages";

export const element = createBrowserRouter([
  {
    element: <HomeLayout />,
    path: "/",
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
]);
