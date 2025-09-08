import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Social from ".";

describe("Social", () => {
  const mockProps = {
    icon: "facebook-icon.png",
    title: "Facebook link",
    link: "https://www.facebook.com/lanacion"
  };

  it("Should render link, href and title correclty", () => {
    render(<Social {...mockProps} />);
    const linkElement = screen.getByRole("link", { name: mockProps.title });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", mockProps.link);
    expect(linkElement).toHaveAttribute("title", mockProps.title);
  });

  it("Should render img with props correctly", () => {
    render(<Social {...mockProps} />);
    const imageElement = screen.getByRole("img", { name: mockProps.title });
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", mockProps.icon);
    expect(imageElement).toHaveAttribute("alt", mockProps.title);
  });

  it('Should have data-testid="social-icon" in the element a', () => {
    render(<Social {...mockProps} />);
    const linkElement = screen.getByTestId("social-icon");
    expect(linkElement).toBeInTheDocument();
  });
});
