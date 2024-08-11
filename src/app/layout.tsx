"use client";

import "./../styles/globals.css";
import { ThemeProvider } from "@components/Theme/ThemeContext";
import { store } from "@state/store";
import { Provider } from "react-redux";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ThemeProvider>{children}</ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
