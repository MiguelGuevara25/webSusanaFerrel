import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import router from "./Router.jsx";
import React from "react";
import AOS from "aos";
import "swiper/css/pagination";
import "aos/dist/aos.css";
import "animate.css";
import "./index.css";
import "swiper/css";
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
