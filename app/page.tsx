import Header from "./components/Header";
import Scroller from "./components/Scroller";
import Signature from "./components/Signature";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <Scroller />
      <Signature />
    </main>
  );
}
