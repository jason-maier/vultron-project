import Image from "next/image";

interface MessageProps {
  message: {
    role: string;
    content: string;
  };
}

const Message = ({ message }: MessageProps) => {
  return (
    <div className="flex flex-grow max-w-full">
      <div className="my-4 flex flex-row items-start">
        {message.role === "user" ? (
          <Image src="./person.svg" width={30} height={30} alt="Person Icon" />
        ) : (
          <Image
            src="./Vultron.svg"
            width={30}
            height={30}
            alt="Vultron Logo"
          />
        )}
        <div className="ml-4 flex flex-col">
          <div className="font-bold">
            {message.role === "user" ? "You" : "VultGPT"}
          </div>
          <div>{message.content}</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
