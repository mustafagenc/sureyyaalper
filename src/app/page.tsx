import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex items-center flex-col justify-center min-h-screen p-8 pb-20 gap-3">
      <div>
        <Image src="/logo.png" alt="alt" width={300} height={300} />
      </div>
      <div className="text-5xl font-extrabold text-shadow-2xs text-amber-200">Süreyya Alper</div>
    </div>
  );
}
