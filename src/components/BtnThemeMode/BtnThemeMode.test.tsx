import { describe, test as it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BtnThemeMode from "./BtnThemeMode";

describe("theme btn component", () => {
  it("renders button with correct class", () => {
    render(<BtnThemeMode />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
