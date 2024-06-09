import Link from "next/link";

const MenuFilter = () => {
  return (
    <aside className="flex lg:flex-col flex-wrap gap-4 w-full lg:max-w-[200px]">
      <Link
        href="/"
        className="hover:bg-gray-200 px-2 py-1 rounded-md capitalize transition-colors"
      >
        All
      </Link>
      <Link
        href="/"
        className="hover:bg-gray-200 px-2 py-1 rounded-md capitalize transition-colors"
      >
        Coucou
      </Link>
      <Link
        href="/"
        className="hover:bg-gray-200 px-2 py-1 rounded-md capitalize transition-colors"
      >
        WEsh
      </Link>
      <Link
        href="/"
        className="hover:bg-gray-200 px-2 py-1 rounded-md capitalize transition-colors"
      >
        Bonbon
      </Link>
    </aside>
  );
};
export default MenuFilter;
