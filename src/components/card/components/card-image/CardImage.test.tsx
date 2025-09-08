import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CardImage from ".";

describe("CardImage component", () => {
  const defaultProps = {
    src: "test-image.jpg",
    alt: "Test Image"
  };

  it("Render img with props", () => {
    render(<CardImage {...defaultProps} />);

    const imgElement = screen.getByAltText("card_image_Test Image");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "test-image.jpg");
    expect(imgElement).toHaveClass("w-full max-h-[768px]");
  });

  it("Render img with badge when exists `badge` prop", () => {
    const badge = "New!";
    render(<CardImage {...defaultProps} badge={badge} />);
    const badgeElement = screen.getByText(badge);
    expect(badgeElement).toBeInTheDocument();
  });

  it("Should not render badge when the prop does not exist", () => {
    render(<CardImage {...defaultProps} />);
    const badgeElement = screen.queryByText(/./);
    expect(badgeElement).not.toBeInTheDocument();
  });

  it("Should spinner while img load", () => {
    render(<CardImage {...defaultProps} />);
    const spinnerElement = screen.getByTestId("loader");
    expect(spinnerElement).toBeInTheDocument();
  });

  it("Should hidden loader when img loaded", () => {
    render(<CardImage {...defaultProps} />);
    const imgElement = screen.getByAltText("card_image_Test Image");

    const spinnerElement = screen.getByTestId("loader");
    expect(spinnerElement).toBeInTheDocument();

    fireEvent.load(imgElement);

    expect(spinnerElement).not.toBeInTheDocument();
  });

  it("Should apply custom className", () => {
    const customClass = "px-4";
    render(<CardImage {...defaultProps} className={customClass} />);
    const imgElement = screen.getByAltText("card_image_Test Image");
    expect(imgElement).toHaveClass(customClass);
    expect(imgElement).not.toHaveClass("w-full max-h-[768px]");
  });
});
