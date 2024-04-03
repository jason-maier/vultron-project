import MessageTextInput from "@/Components/MessageTextInput";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("MessageTextInput", () => {
  it("renders the correct input", () => {
    render(
      <MessageTextInput
        input="Hello, VultGPT!"
        onInputChange={() => {}}
        onSubmit={() => {}}
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
        onInputChange={() => {}}
        onSubmit={() => {}}
      />
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("disables the button when the input is empty", () => {
    render(
      <MessageTextInput input="" onInputChange={() => {}} onSubmit={() => {}} />
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("fires the correct actions", () => {
    const mockonInputChange = jest.fn();
    const mockonSubmit = jest.fn((e) => e.preventDefault());
    render(
      <MessageTextInput
        input="Hello, VultGPT!"
        onInputChange={mockonInputChange}
        onSubmit={mockonSubmit}
      />
    );
    const input = screen.getByPlaceholderText("Message VultGPT...");
    const button = screen.getByRole("button");
    act(() => {
      fireEvent.change(input, { target: { value: "H" } });
      button.click();
    });
    expect(mockonInputChange).toHaveBeenCalledTimes(1);
    expect(mockonSubmit).toHaveBeenCalledTimes(1);
  });
});
