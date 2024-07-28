import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "./SearchBar";
import { describe, it, expect, vi } from "vitest";

describe("SearchBar Component", () => {
  const mockOnSearch = vi.fn();
  it("renders with default value from localStorage", () => {
    localStorage.setItem("request", "test request");
    render(<SearchBar onSearch={mockOnSearch} />);
    const inputElement = screen.getByPlaceholderText("Enter your request");
    expect(inputElement).toHaveValue("test request");
  });

  it("updates state on input change", () => {
    render(<SearchBar onSearch={mockOnSearch} />);

    const inputElement = screen.getByPlaceholderText("Enter your request");
    fireEvent.change(inputElement, { target: { value: "new request" } });
    expect(inputElement).toHaveValue("new request");
  });
});
