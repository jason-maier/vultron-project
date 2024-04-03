import Message from "@/Components/Message";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Message", () => {
  it("renders a message from the user", () => {
    render(<Message content="Hello, VultGPT!" role="user" />);
    expect(screen.getByText("You")).toBeInTheDocument();
    expect(screen.getByText("Hello, VultGPT!")).toBeInTheDocument();
  });

  it("renders a message from VultGPT", () => {
    render(<Message content="Hello, User!" role="assistant" />);
    expect(screen.getByText("VultGPT")).toBeInTheDocument();
    expect(screen.getByText("Hello, User!")).toBeInTheDocument();
  });
});
