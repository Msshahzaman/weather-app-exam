import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchHistoryPage from "../view/SearchHistoryPage";
import Weather from "../view/Weather";

const router = createBrowserRouter([
    { path: "/", 
    element:<Weather/> },

    { path: "/history", 
    element:<SearchHistoryPage/> },
])

function Router() {
    return <RouterProvider router={router} />;
  }
  export default Router