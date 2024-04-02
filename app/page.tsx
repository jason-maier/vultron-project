"use client";

import MessageTextInput from "@/Components/MessageTextInput";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [message, setMessage] = useState<string>("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {message && <div>message</div>}
      {!message && (
        <div className="flex flex-col items-center my-auto">
          <Image
            src="./vultron.svg"
            width={80}
            height={80}
            alt="VultGPT Logo"
          />
          <h2 className="my-4 text-3xl font-bold">How can I help you today?</h2>
        </div>
      )}
      <MessageTextInput onClick={setMessage} />
    </main>
  );
}
