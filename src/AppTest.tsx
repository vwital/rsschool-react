// // src/App.test.jsx
// import { render, screen } from "@testing-library/react";
// import { describe, it, expect } from "vitest";
// import "@testing-library/jest-dom";
// import App from "./App";
// import { Provider } from "react-redux";
// import { store } from "@state/store";
// import { BrowserRouter } from "react-router-dom";
// import Flyout from "@components/Flyout/Flyout";
// import { ThemeProvider } from "@components/Theme/ThemeContext";

// describe("Render App component", () => {
//   it("render error btn", () => {
//     render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <ThemeProvider>
//             <Flyout />
//             <App />
//           </ThemeProvider>
//         </BrowserRouter>
//       </Provider>,
//     );
//     expect(screen.getByText("Throw an error")).toBeInTheDocument();
//   });
// });
