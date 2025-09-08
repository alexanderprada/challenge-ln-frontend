import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Card from ".";
import type { CardProps } from "./types/card-props";

const mockCardData: CardProps["cardData"] = {
  title: "Test Title",
  description: "This is a description",
  imageUrl: "/test.jpg",
  badge: "New",
  linkToDetail: "/noticia",
  authorName: "Cosme Fulanito",
  authorImageUrl: "/author.jpg",
  lead: "Lead text"
};

describe("Card component", () => {
  it("Renders title correctly", () => {
    render(<Card cardData={mockCardData} />);
    expect(
      screen.getByRole("heading", { name: /test title/i })
    ).toBeInTheDocument();
  });

  it("Renders link with correct href", () => {
    render(<Card cardData={mockCardData} />);
    const link = screen.getByRole("link", { name: /test title/i });
    expect(link).toHaveAttribute("href", "/noticia");
  });

  it("Renders description only in DEFAULT variant", () => {
    render(<Card cardData={mockCardData} variant="DEFAULT" />);
    expect(screen.getByText("This is a description")).toBeInTheDocument();

    cleanup();

    render(<Card cardData={mockCardData} variant="COMPACT" />);
    expect(screen.queryByText("This is a description")).not.toBeInTheDocument();
  });

  it("Renders author only if authorName exists", () => {
    render(<Card cardData={mockCardData} />);
    expect(screen.getByText("Cosme Fulanito")).toBeInTheDocument();

    cleanup();

    const noAuthorData = { ...mockCardData, authorName: undefined };
    render(<Card cardData={noAuthorData} />);
    expect(screen.queryByText("Cosme Fulanito")).not.toBeInTheDocument();
  });

  it("Renders image only in DEFAULT variant", () => {
    render(<Card cardData={mockCardData} variant="DEFAULT" />);
    expect(
      screen.getByRole("img", { name: /test title/i })
    ).toBeInTheDocument();

    cleanup();

    render(<Card cardData={mockCardData} variant="HERO" />);
    expect(
      screen.queryByRole("img", { name: /test title/i })
    ).not.toBeInTheDocument();
  });

  it("Centers title when variant is HERO", () => {
    render(<Card cardData={mockCardData} variant="HERO" />);
    const heading = screen.getByRole("heading", { name: /test title/i });
    expect(heading).toHaveClass("text-center");
  });

  it("Render tag 'New'", () => {
    render(<Card cardData={mockCardData} variant="DEFAULT" />);
    const badge = screen.getByText("New");
    expect(badge).toBeInTheDocument();
  });
});
