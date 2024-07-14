import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import "@testing-library/jest-dom";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("renders input and button", () => {
    render(<SearchBar onSearch={vi.fn()} />);
    expect(
      screen.getByPlaceholderText("Enter your request"),
    ).toBeInTheDocument();
  });
});
