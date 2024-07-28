// src/App.test.jsx

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";

const renderComponent = () => {
  render(
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>,
  );
};

describe("Main page component", () => {
  it("render main page components", () => {
    renderComponent();
    const btnText = screen.getByText(/Error. Something went wrong./i);
    expect(btnText).toBeInTheDocument();
  });
  it("button counter", () => {
    renderComponent();
    const buttonCounter = screen.getAllByRole("button");
    expect(buttonCounter).toHaveLength(1);
  });
});
