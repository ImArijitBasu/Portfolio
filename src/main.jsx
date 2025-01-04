import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import About from "./Pages/About";
import ProjectDetails from "./Pages/projectDetails";
import AllPages from "./Layout/AllPages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <AllPages></AllPages>
      },
      {
        path: "project/:id",
        element: <ProjectDetails></ProjectDetails>
      },
    ]
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
