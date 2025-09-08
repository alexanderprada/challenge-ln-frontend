import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FooterMiddleSection from ".";

const setWindowWidth = (width: number) => {
  window.innerWidth = width;
  window.dispatchEvent(new Event("resize"));
};

describe("FooterMiddleSection", () => {
  beforeEach(() => {
    setWindowWidth(1024);
  });

  it("Should render all ListCategory components on larger screens", () => {
    render(<FooterMiddleSection />);

    expect(screen.getByTestId("list-undefined")).toBeInTheDocument();
    expect(screen.getByTestId("list-Revistas")).toBeInTheDocument();
    expect(screen.getByTestId("list-Club del vino:")).toBeInTheDocument();
    expect(screen.getByTestId("list-Envíos")).toBeInTheDocument();

    const separator = screen.getByTestId("line-separator");
    expect(separator).toBeInTheDocument();
  });

  it("Should not render anything on mobile resolution", () => {
    setWindowWidth(360);
    render(<FooterMiddleSection />);

    const section = screen.getByTestId("footer-middle-section-test");
    expect(section).toHaveClass("hidden");
  });

  it("Should not render the separator line for mobile screens", () => {
    setWindowWidth(360);
    render(<FooterMiddleSection />);

    const separator = screen.queryByTestId("line-separator");
    expect(separator).toHaveClass("hidden");
  });

  it("Should render the separator line for screens larger than 768px (sm breakpoint)", () => {
    setWindowWidth(1024);
    render(<FooterMiddleSection />);

    const separator = screen.getByTestId("line-separator");
    expect(separator).toBeInTheDocument();
  });
});
