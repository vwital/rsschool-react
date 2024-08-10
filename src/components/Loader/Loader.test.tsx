import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import Loader from "./Loader";

describe("Loader component", () => {
  it("renders loading text", () => {
    render(<Loader />);
    const loadingText = screen.getByText(/Loading/i);
    expect(loadingText).toBeInTheDocument();
  });
});
