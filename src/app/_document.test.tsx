import { render } from "@testing-library/react";
import Document from "./_document";
import "@testing-library/jest-dom";
import { vi } from "vitest";

vi.mock("next/document", () => ({
  Html: ({ children }: { children: React.ReactNode }) => (
    <html>{children}</html>
  ),
  Head: () => <head />,
  Main: () => <div id="main" />,
  NextScript: () => <script />,
}));

describe("Document component", () => {
  it("renders custom document correctly", () => {
    const { container } = render(<Document />);
    expect(container.querySelector("html")).toBeInTheDocument();
    expect(container.querySelector("head")).toBeInTheDocument();
    expect(container.querySelector("body")).toBeInTheDocument();
  });
});
