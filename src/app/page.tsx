import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex items-center flex-col justify-center min-h-screen p-8 pb-20 gap-3">
      <div className="mb-5">
        <Image src="/logo.png" alt="alt" width={300} height={300} />
      </div>
      <div className="text-7xl font-extrabold bg-gradient-to-tr from-amber-200 to-amber-400 text-transparent bg-clip-text text-center">
        Süreyya Alper
      </div>
    </div>
  );
}
