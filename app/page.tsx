"use client";

import MessageTextInput from "@/Components/MessageTextInput";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string>("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MessageTextInput onClick={setMessage} />
    </main>
  );
}
