import MessageTextInput from "@/Components/MessageTextInput";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("MessageTextInput", () => {
  it("renders the correct input", () => {
    render(
      <MessageTextInput
        input="Hello, VultGPT!"
        onChange={() => {}}
        onClick={() => {}}
      />
    );
    expect(
      screen.getByPlaceholderText("Message VultGPT...")
    ).toBeInTheDocument();
  });

  it("renders the correct button", () => {
    render(
      <MessageTextInput
        input="Hello, VultGPT!"
        onChange={() => {}}
        onClick={() => {}}
      />
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("disables the button when the input is empty", () => {
    render(
      <MessageTextInput input="" onChange={() => {}} onClick={() => {}} />
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("fires the correct actions", () => {
    const mockOnChange = jest.fn();
    const mockOnClick = jest.fn((e) => e.preventDefault());
    render(
      <MessageTextInput
        input="Hello, VultGPT!"
        onChange={mockOnChange}
        onClick={mockOnClick}
      />
    );
    const input = screen.getByPlaceholderText("Message VultGPT...");
    const button = screen.getByRole("button");
    act(() => {
      fireEvent.change(input, { target: { value: "H" } });
      button.click();
    });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
