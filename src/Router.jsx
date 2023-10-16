import { createBrowserRouter } from "react-router-dom";
import Servicios from "./views/servicios/page/Servicios";
import Navbar from "./components/Navbar";
import Home from "./views/home/page/Home";
import Blog from "./views/blog/page/Blog";
import AboutUs from "./views/aboutus/page/AboutUs";
import Contact from "./views/contact/page/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/servicios",
        element: <Servicios />,
      },

      {
        path: "/nosotros",
        element: <AboutUs />,
      },

      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/contacto",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
