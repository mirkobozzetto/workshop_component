import Header from "@/components/Header";
import MenuFilter from "@/components/MenuFilter";
import { REACT_CARDS } from "@/data/cardsData";

export default function Home() {
  const filters = [
    ...(new Set(REACT_CARDS.map((card) => card.category)) as Iterable<string>),
  ];

  return (
    <main className="flex flex-col m-auto px-4 max-w-4xl h-full">
      <Header />
      <div className="flex max-lg:flex-col flex-1 gap-4 mt-8 mb-4 py-2 overflow-auto">
        <MenuFilter filters={filters} />
      </div>
    </main>
    //
  );
}
