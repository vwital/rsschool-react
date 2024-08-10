"use client";
import "@styles/globals.css";
import { ThemeProvider } from "@components/Theme/ThemeContext";
import { store } from "@state/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
