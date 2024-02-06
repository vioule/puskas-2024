import Link from "next/link";

export default function Signature() {
  return (
    <Link
      className="text-white absolute bottom-4 right-2 rotate-[-90deg] origin-bottom-left translate-x-[100%] font-roboto uppercase tracking-[0.3rem] max-sm:text-[8px] text-[10px] font-thin opacity-70 mix-blend-difference hover:opacity-100"
      href="https://github.com/vioule"
      target="_blank"
      rel="author"
    >
      <span>design & development - Cano Vincent</span>
    </Link>
  );
}
