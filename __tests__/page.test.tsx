import Page from "../app/page";
import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";

// Necessary because scrollIntoView is not implemented in jsdom
window.HTMLElement.prototype.scrollIntoView = function () {};

describe("Page", () => {
  it("renders the correct input", () => {
    render(<Page />);
    expect(
      screen.getByPlaceholderText("Message VultGPT...")
    ).toBeInTheDocument();
  });

  it("renders the empty state when there are no messages", () => {
    render(<Page />);
    expect(screen.getByText("How can I help you today?")).toBeInTheDocument();
  });

  it("renders the messages", () => {
    render(<Page />);
    const input = screen.getByPlaceholderText("Message VultGPT...");
    const button = screen.getByRole("button");
    act(() => {
      fireEvent.change(input, {
        target: { value: "Who is your favorite Formula One Driver?" },
      });
      button.click();
    });
    expect(
      screen.getByText("Who is your favorite Formula One Driver?")
    ).toBeInTheDocument();
  });
});
