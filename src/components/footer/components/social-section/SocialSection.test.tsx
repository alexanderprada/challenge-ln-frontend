import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SocialSection from ".";

describe("SocialSection", () => {
  it('Should render an image with alt text "logo-LANACION"', () => {
    render(<SocialSection />);
    const logoImages = screen.getAllByAltText("logo-LANACION");
    expect(logoImages).toHaveLength(2);
  });

  it("Should render exactly 4 items inside the social network list", () => {
    render(<SocialSection />);
    const socialList = screen.getByTestId("social-network-list");
    const socialIcons = socialList.querySelectorAll(
      '[data-testid="social-icon"]'
    );
    expect(socialIcons.length).toBe(4);
  });

  it("Should render exactly 2 items inside the stores list", () => {
    render(<SocialSection />);
    const storesList = screen.getByTestId("stores-list");
    const storeIcons = storesList.querySelectorAll(
      '[data-testid="social-icon"]'
    );
    expect(storeIcons.length).toBe(2);
  });
});
