import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import ChildrensHealth from "./pages/ChildrensHealth";
import Consulting from "./pages/Consulting";
import Contact from "./pages/Contact";
import CreateAccount from "./pages/CreateAccount";
import FlourishCare from "./pages/FlourishCare";
import GeneralHealth from "./pages/GeneralHealth";
import HealthPackages from "./pages/HealthPackages";
import Kits from "./pages/Kits";
import MensHealth from "./pages/MensHealth";
import SexualHealth from "./pages/SexualHealth";
import SingleTest from "./pages/SingleTest";
import Tests from "./pages/Tests";
import Vaccine from "./pages/Vaccine";
import WomensHealth from "./pages/WomensHealth";
import NotFound from "./pages/NotFound";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const prevenzaProjectRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/cart", element: <Cart /> },
  { path: "/childrens-health", element: <ChildrensHealth /> },
  { path: "/consulting", element: <Consulting /> },
  { path: "/contact", element: <Contact /> },
  { path: "/create-account", element: <CreateAccount /> },
  { path: "/flourish-care", element: <FlourishCare /> },
  { path: "/general-health", element: <GeneralHealth /> },
  { path: "/health-packages", element: <HealthPackages /> },
  { path: "/kits", element: <Kits /> },
  { path: "/mens-health", element: <MensHealth /> },
  { path: "/sexual-health", element: <SexualHealth /> },
  { path: "/single-test", element: <SingleTest /> },
  { path: "/tests", element: <Tests /> },
  { path: "/vaccine", element: <Vaccine /> },
  { path: "/womens-health", element: <WomensHealth /> },
  { path: "*", element: <NotFound /> },
]);

export default function App() {

  return (
    <>
      <RouterProvider router={prevenzaProjectRouter} />
    </>
  )
}