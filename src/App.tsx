// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import MainPage from "@pages/Main/MainPage";
// import NotFoundPage from "@pages/404/NotFoundPage";
// import DetailedPage from "@pages/DetailedPage/DetailedPage";
// import { ThemeProvider } from "@components/Theme/ThemeContext";
// import Flyout from "@components/Flyout/Flyout";
// import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainPage />,
//     errorElement: <NotFoundPage />,
//   },
//   {
//     path: "pages/:page",
//     element: <MainPage />,
//     errorElement: <NotFoundPage />,
//     children: [
//       {
//         path: ":planetId",
//         element: <DetailedPage />,
//       },
//     ],
//   },
// ]);

// function App() {
//   return (
//     <ThemeProvider>
//       <RouterProvider router={router} />
//       <Flyout />
//     </ThemeProvider>
//   );
// }

// export default App;
