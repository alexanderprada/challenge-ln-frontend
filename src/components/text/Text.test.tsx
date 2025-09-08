import { render, screen } from "@testing-library/react";
import Text from ".";

describe("Text component", () => {
  it("Render title", () => {
    render(<Text>Hello world</Text>);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });

  it("Renders variant text correctly", () => {
    render(
      <Text>
        Hello <Text variant="span">world</Text>
      </Text>
    );

    const elementP = screen.getByText("Hello");
    const elementSpan = screen.getByText("world");
    expect(elementP.tagName).toBe("P");
    expect(elementSpan.tagName).toBe("SPAN");
  });

  it("Render default with size xs", () => {
    render(<Text>Hello world</Text>);
    expect(screen.getByText("Hello world")).toHaveClass("text-xs");
  });

  it("Applies size, weight, align, color classes", () => {
    render(
      <Text size="lg" weight="bold" align="center" color="lightNeutral900">
        Hello world
      </Text>
    );

    const textElement = screen.getByText("Hello world");

    expect(textElement).toHaveClass("text-lg");
    expect(textElement).toHaveClass("font-bold");
    expect(textElement).toHaveClass("text-center");
    expect(textElement).toHaveClass("text-light-neutral-900");
  });

  it("Renders custom className", () => {
    render(<Text className="px-4">Hello world</Text>);

    const titleElement = screen.getByText("Hello world");
    expect(titleElement).toHaveClass("px-4");
  });
});
