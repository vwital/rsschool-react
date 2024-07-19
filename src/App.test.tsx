// src/App.test.jsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import App from "./App";

describe("Render App component", () => {
  it("render error btn", () => {
    render(<App />);
    expect(screen.getByText("Throw an error")).toBeInTheDocument();
  });
});
