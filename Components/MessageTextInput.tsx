import React, { useState } from "react";

interface MessageTextInputProps {
  input: any;
  onChange: any;
  onClick: any;
}

const MessageTextInput = ({
  input,
  onChange,
  onClick,
}: MessageTextInputProps) => {
  const [currentMessage, setCurrentMessage] = useState<string>("");
  return (
    <div className="w-3/5">
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <input
          type="search"
          id="search"
          className="block w-full p-4 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-400"
          placeholder="Message VultGPT..."
          value={input}
          onChange={onChange}
        />
        <button
          type="submit"
          onClick={onClick}
          className="text-white absolute end-2.5 bottom-2.5 bg-black focus:ring-4 focus:outline-none focus:ring-green-400 font-medium rounded-lg text-sm px-4 py-2"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageTextInput;
