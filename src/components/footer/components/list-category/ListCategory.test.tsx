import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ListCategory from ".";

describe("ListCategory", () => {
  const mockList = [
    { text: "Category 1", link: "/category/1" },
    { text: "Category 2", link: "/category/2" },
    { text: "Category 3", link: "/category/3" }
  ];

  it("Should render the title and list items with default props", () => {
    render(<ListCategory list={mockList} title="Categories" />);

    expect(screen.getByText("Categories")).toBeInTheDocument();

    expect(screen.getByText("Category 1")).toBeInTheDocument();
    expect(screen.getByText("Category 2")).toBeInTheDocument();
    expect(screen.getByText("Category 3")).toBeInTheDocument();

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveAttribute("href", "/category/1");
    expect(links[1]).toHaveAttribute("href", "/category/2");
    expect(links[2]).toHaveAttribute("href", "/category/3");
  });

  it("Should render separators between items by default", () => {
    render(<ListCategory list={mockList} />);

    const separators = screen.getAllByTestId("item-separator-test");
    expect(separators).toHaveLength(mockList.length - 1);
  });

  it("Should not render a separator if it is the last item", () => {
    render(<ListCategory list={mockList} />);

    const links = screen.getAllByRole("link");
    const lastLinkParent = links[links.length - 1].parentElement;
    expect(lastLinkParent).not.toContainHTML(
      '<span data-testid="item-separator-test">|</span>'
    );
  });

  it("Should not render separators when `withSeparator` is false", () => {
    render(<ListCategory list={mockList} withSeparator={false} />);

    const separators = screen.queryAllByTestId("separator-mock");
    expect(separators).toHaveLength(0);
  });

  it("Should render an empty list without crashing", () => {
    render(<ListCategory list={[]} />);
    const linkElements = screen.queryAllByRole("link");
    expect(linkElements).toHaveLength(0);
  });
});
