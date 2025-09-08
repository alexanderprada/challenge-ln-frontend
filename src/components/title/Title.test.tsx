import { render, screen } from "@testing-library/react";
import Title from ".";

describe("Title component", () => {
  it("Render title", () => {
    render(<Title>Hello world</Title>);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });

  it("Renders lead text", () => {
    render(<Title lead="Lead.">Hello world</Title>);

    expect(screen.getByText("Lead.")).toBeInTheDocument();
  });

  it("Applies size, weight, align, color classes", () => {
    render(
      <Title
        size="lg"
        weight="bold"
        align="center"
        color="lightNeutral900"
        lead="Lead"
      >
        Hello world
      </Title>
    );

    const titleElement = screen.getByText("Hello world").closest("h1");

    expect(titleElement).toHaveClass("text-lg");
    expect(titleElement).toHaveClass("font-bold");
    expect(titleElement).toHaveClass("text-center");
    expect(titleElement).toHaveClass("text-light-neutral-900");
  });

  it("Renders custom className", () => {
    render(<Title className="px-4">Hello world</Title>);

    const titleElement = screen.getByText("Hello world").closest("h1");
    expect(titleElement).toHaveClass("px-4");
  });
});
