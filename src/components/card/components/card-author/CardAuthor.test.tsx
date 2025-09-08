import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CardAuthor from ".";

describe("CardAuthor", () => {
  const defaultProps = {
    name: "Cosme Fulanito",
    image: "author-image.jpg"
  };

  it("Should render the author name with onlyText variant", () => {
    render(<CardAuthor {...defaultProps} />);
    const authorName = screen.getByText("Cosme Fulanito");
    expect(authorName).toBeInTheDocument();

    const cardImage = screen.queryByTestId("card-image");
    expect(cardImage).not.toBeInTheDocument();
  });

  it('Should render the author name and image in "horizontal" variant', () => {
    render(<CardAuthor {...defaultProps} variant="horizontal" />);

    const authorName = screen.getByText("Cosme Fulanito");
    expect(authorName).toBeInTheDocument();

    const cardImage = screen.getByTestId("card-image");
    expect(cardImage).toBeInTheDocument();
    expect(cardImage).toHaveClass(
      "w-14 h-14 max-w-14 max-h-14 rounded-full object-cover"
    );
    const imageElement = screen.getByAltText("card_image_Cosme Fulanito");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "author-image.jpg");
  });

  it('Should render the author name and image in "vertical" variant', () => {
    render(<CardAuthor {...defaultProps} variant="vertical" />);

    const authorName = screen.getByText("Cosme Fulanito");
    expect(authorName).toBeInTheDocument();

    const container = authorName.parentElement;
    expect(container).toHaveClass("flex-col");

    const cardImage = screen.getByTestId("card-image");
    expect(cardImage).toBeInTheDocument();
    expect(cardImage).toHaveClass(
      "w-16 h-16 max-w-16 max-h-16 rounded-full object-cover"
    );
  });

  it("Should apply custom text color", () => {
    render(<CardAuthor {...defaultProps} colorText="neutralDark800" />);
    const textElement = screen.getByText("Cosme Fulanito");
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass("text-neutral-dark-800");
  });

  it("Should not render the image if the `image` prop is not provided, even with a variant", () => {
    render(
      <CardAuthor {...defaultProps} image={undefined} variant="horizontal" />
    );

    const authorName = screen.getByText("Cosme Fulanito");
    expect(authorName).toBeInTheDocument();

    // Check that CardImage is not rendered
    const cardImage = screen.queryByTestId("card-image");
    expect(cardImage).not.toBeInTheDocument();
  });
});
