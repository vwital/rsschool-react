import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import MainPage from "./page";
import { useRouter } from "next/navigation";

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
  useSearchParams: vi.fn(),
}));

describe("Main Page component", () => {
  it("Render main page without components", () => {
    (useRouter as jest.Mock).mockReturnValue({
      query: { name: "Test" },
      back: vi.fn(),
    });
    render(<MainPage />);
    expect(screen.getByText(/Reload Page/i)).toBeInTheDocument();
  });
});
