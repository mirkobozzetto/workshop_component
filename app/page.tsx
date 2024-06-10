import Header from "@/components/Header";
import MenuFilter from "@/components/MenuFilter";
import { REACT_CARDS } from "@/data/cardsData";

type HomeProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Home({ searchParams }: HomeProps) {
  const currentFilter = searchParams.filter;
  const filters = [
    ...(new Set(REACT_CARDS.map((card) => card.category)) as Iterable<string>),
  ];
  console.log({ currentFilter });

  return (
    <main className="flex flex-col m-auto px-4 max-w-4xl h-full">
      <Header />
      <div className="flex max-lg:flex-col flex-1 gap-4 mt-8 mb-4 py-2 overflow-auto">
        <MenuFilter currentFilter={currentFilter} filters={filters} />
      </div>
    </main>
  );
}
