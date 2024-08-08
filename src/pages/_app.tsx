"use client";
import { ThemeProvider } from "@components/Theme/ThemeContext";
import { store } from "@state/store";
import "./../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
console.log("TODO RESTORE HUSKY SCRIPTS");
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
