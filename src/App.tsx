import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "@pages/main/MainPage";
import NotFoundPage from "@pages/404/NotFoundPage.tsx";
import DetailedPage from "@pages/DetailedPage/DetailedPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "pages/:page",
    element: <MainPage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: ":planetId",
        element: <DetailedPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
