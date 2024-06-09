import Link from "next/link";

type MenuFilterProps = {
  filters: string[];
};

const MenuFilter = ({ filters }: MenuFilterProps) => {
  const newLocal =
    "hover:bg-gray-200 px-2 py-1 rounded-md capitalize transition-colors";
  return (
    <aside className="flex lg:flex-col flex-wrap gap-4 w-full lg:max-w-[200px]">
      {filters.map((filter) => (
        <Link
          key={filter}
          href={`/?filter=${filter}`}
          className="hover:bg-gray-200 px-2 py-1 rounded-md capitalize transition-colors"
        >
          {filter}
        </Link>
      ))}
    </aside>
  );
};
export default MenuFilter;
