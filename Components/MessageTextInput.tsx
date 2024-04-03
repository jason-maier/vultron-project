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
    <form className="w-3/5" onSubmit={onClick}>
      <label
        htmlFor="message"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Write a message for VultGPT
      </label>
      <div className="relative">
        <input
          id="message"
          className="block w-full p-4 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-400"
          placeholder="Message VultGPT..."
          value={input}
          onChange={onChange}
        />
        <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
          <button
            type="button"
            className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <svg
              className="w-6 h-6 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default MessageTextInput;
