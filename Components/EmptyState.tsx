import Image from "next/image";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center">
      <Image src="./Vultron.svg" width={80} height={80} alt="Vultron Logo" />
      <h2 className="my-4 text-3xl font-bold">How can I help you today?</h2>
    </div>
  );
};

export default EmptyState;
