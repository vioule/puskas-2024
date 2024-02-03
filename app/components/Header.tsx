import Image from "next/image";

export default function Header() {
  return (
    <header className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col max-w-[22.5rem]">
        <div className="relative h-20">
          <Image src="/FIFA.svg" alt="FIFA logo" fill />
        </div>
        <span className="text-6xl text-gold tracking-[1.5rem] font-black font-roboto mt-4">
          PUSKÀS
        </span>
        <span className="text-white text-2xl tracking-[0.5rem] text-right">
          AWARD
        </span>
      </div>
    </header>
  );
}
