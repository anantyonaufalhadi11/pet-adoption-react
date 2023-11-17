import Categories from "../Pages/Categories";
import DonatePage from "../Pages/DonatePage";
import FindPet from "../Pages/FindPet";
import LandingPage from "../Pages/LandingPage";
import List from "../Pages/List";
import Login from "../Pages/Login";
import PetDetails from "../Pages/PetDetails";

// Define page routing using new method of react router dom
const router = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/details",
    element: <PetDetails />,
  },
  {
    path: "/find",
    element: <FindPet />,
  },
  {
    path: "/donate",
    element: <DonatePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default router
