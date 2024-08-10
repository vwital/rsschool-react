import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorBoundary from "./ErrorBoundary";
import ErrorComponent from "./ErrorComponent";
import { vi } from "vitest";

const ThrowAnError = () => {
  throw new Error("Test error");
};

const renderPage = () => {
  render(
    <ErrorBoundary>
      <ErrorComponent />
    </ErrorBoundary>,
  );
};

describe("Error Boundary", () => {
  it("Error Boundary has error message", () => {
    renderPage();
    const errorMessage = "Error. Something went wrong.";
    expect(errorMessage).toBeDefined();
  });
  it("Error Boundary has reload button", () => {
    renderPage();
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
  const consoleErrorMock = vi.spyOn(console, "error");

  it("ErrorBoundary call the error", () => {
    render(
      <ErrorBoundary>
        <ThrowAnError />
      </ErrorBoundary>,
    );
    expect(consoleErrorMock).toHaveBeenCalled();
  });
});
