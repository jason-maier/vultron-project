"use client";

import MessageTextInput from "@/Components/MessageTextInput";
import { useState } from "react";
import Image from "next/image";
import { useChat } from "ai/react";

export default function Home() {
  // const [message, setMessage] = useState<string>("");
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {messages.map((m) => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === "user" ? "User: " : "AI: "}
          {m.content}
        </div>
      ))}
      {!messages.length && (
        <div className="flex flex-col items-center my-auto">
          <Image
            src="./vultron.svg"
            width={80}
            height={80}
            alt="Vultron Logo"
          />
          <h2 className="my-4 text-3xl font-bold">How can I help you today?</h2>
        </div>
      )}
      <MessageTextInput
        input={input}
        onChange={handleInputChange}
        onClick={handleSubmit}
      />
    </div>
  );
}
{
  /* // <div className="flex flex-row items-start w-3/5">
        //   <Image
        //     src="./vultron.svg"
        //     width={30}
        //     height={30}
        //     alt="Vultron Logo"
        //   />
        //   <div className="ml-4 flex flex-col">
        //     <div className="font-bold">VultGPT</div>
        //     <div>{message}</div>
        //   </div>
        // </div> */
}
