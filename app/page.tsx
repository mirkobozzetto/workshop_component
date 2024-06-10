import Header from "@/components/Header";
import MenuFilter from "@/components/MenuFilter";
import { REACT_CARDS } from "@/data/cardsData";
import ReactCard from "../components/ReactCard";

type HomeProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Home({ searchParams }: HomeProps) {
  const currentFilter = searchParams.filter;
  const filters = [
    ...(new Set(REACT_CARDS.map((card) => card.category)) as Iterable<string>),
  ];
  // console.log({ currentFilter });

  return (
    <main className="flex flex-col m-auto px-4 max-w-4xl h-full">
      <Header />
      <div className="flex max-lg:flex-col flex-1 gap-4 mt-8 mb-4 py-2 overflow-auto">
        <MenuFilter currentFilter={currentFilter} filters={filters} />
        <div className="w-full overflow-auto">
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24 w-full h-fit overflow-auto">
            {REACT_CARDS.filter((card) => {
              if (!currentFilter) return true;
              return card.category === currentFilter;
            }).map((card) => (
              <ReactCard
                hideCategory={currentFilter}
                key={card.name}
                card={card}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
