"use client";

import AlwaysScrollToBottom from "@/Components/AlwaysScrollToBottom";
import EmptyState from "@/Components/EmptyState";
import Message from "@/Components/Message";
import MessageTextInput from "@/Components/MessageTextInput";
import { useChat } from "ai/react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col items-center justify-between pb-12 pt-12 vultgpt-container">
      <div className="flex flex-col mb-4 w-3/5 h-full overflow-auto whitespace-pre-wrap">
        {!messages.length && <EmptyState />}
        {messages.map(({ content, role, id }) => (
          <Message key={id} content={content} role={role} />
        ))}
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
