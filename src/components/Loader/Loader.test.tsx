import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loader from "./Loader";
import { describe, it, expect } from "vitest";

describe("Loader component", () => {
  it("renders loading test and logo", () => {
    render(<Loader />);
    const loadingText = screen.getByText(/Loading.../i);
    expect(loadingText).toBeInTheDocument();
  });
});
