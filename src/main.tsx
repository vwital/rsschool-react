import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import NotFoundPage from "@pages/NotFoundPage.tsx";
// import DetailedPage from "@components/DetailedPage/DetailedPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "page/:id/details/:name",
        // element: <DetailedPage />,
      },
    ],
  },
  {
    path: "pages/:page",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
