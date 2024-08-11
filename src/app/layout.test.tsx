import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import RootLayout from "./layout";

describe("RootLayout component", () => {
  it("renders children correctly", () => {
    render(
      <RootLayout>
        <div>Test Child Element</div>
      </RootLayout>,
    );
    expect(screen.getByText("Test Child Element")).toBeInTheDocument();
  });
});
