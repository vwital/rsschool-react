import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ThemeProvider, useTheme } from "./ThemeContext";

const TestComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <span>{theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

describe("ThemeProvider", () => {
  it("should provide the initial theme and allow toggling", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByText("light")).toBeTruthy();
    fireEvent.click(screen.getByText("Toggle Theme"));
    expect(screen.getByText("dark")).toBeTruthy();
  });
});
