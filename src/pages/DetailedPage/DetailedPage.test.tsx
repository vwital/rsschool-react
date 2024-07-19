import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import DetailedPage from "./DetailedPage";

describe("Detailed Page component", () => {
  it("Render detailed page", () => {
    render(
      <BrowserRouter>
        <DetailedPage />
      </BrowserRouter>,
    );

    expect(screen.getByText(/Close/i)).toBeInTheDocument();
  });
});
