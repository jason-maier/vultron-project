import Image from "next/image";

interface MessageProps {
  content: string;
  role: string;
}

const Message = ({ content, role }: MessageProps) => {
  return (
    <div className="flex max-w-full">
      <div className="my-4 flex flex-row items-start">
        {role === "user" ? (
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
          <div className="font-bold">{role === "user" ? "You" : "VultGPT"}</div>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Message;
