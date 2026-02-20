import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        src="/loader.gif"
        alt="Loading..."
        width={150}
        height={150}
        priority
      />
    </div>
  );
}
