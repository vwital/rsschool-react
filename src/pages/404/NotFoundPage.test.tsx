import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import NotFoundPage from "./NotFoundPage";

describe("Loader component", () => {
  it("renders loading test and logo", () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>,
    );
    const loadingText = screen.getByText(/Page not found/i);
    expect(loadingText).toBeInTheDocument();
  });
});
