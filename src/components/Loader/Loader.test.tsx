import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import Loader from "./Loader";

describe("Loader component", () => {
  it("renders loading test and logo", () => {
    render(<Loader />);
    const loadingText = screen.getByText(/Loading.../i);
    expect(loadingText).toBeInTheDocument();
  });
});
