import Link from "next/link";

const MenuFilter = () => {
  return (
    <aside>
      <Link
        href="/"
        className="hover:bg-gray-200 px-2 py-1 rounded-md capitalize transition-colors"
      >
        All
      </Link>
    </aside>
  );
};
export default MenuFilter;
