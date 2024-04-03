"use client";

import Image from "next/image";
import AlwaysScrollToBottom from "@/Components/AlwaysScrollToBottom";
import Message from "@/Components/Message";
import MessageTextInput from "@/Components/MessageTextInput";
import { useChat } from "ai/react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col items-center justify-between p-24 vultgpt-container">
      <div className="flex flex-col w-3/5 h-full overflow-auto whitespace-pre-wrap">
        {messages.map(({ content, role, id }) => (
          <Message key={id} content={content} role={role} />
        ))}

        {!messages.length && (
          <div className="flex flex-col items-center my-auto">
            <Image
              src="./Vultron.svg"
              width={80}
              height={80}
              alt="Vultron Logo"
            />
            <h2 className="my-4 text-3xl font-bold">
              How can I help you today?
            </h2>
          </div>
        )}
        <AlwaysScrollToBottom />
      </div>
      <MessageTextInput
        input={input}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
