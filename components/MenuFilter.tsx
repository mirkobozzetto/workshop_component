import clsx from "clsx";
import Link from "next/link";

type LinkItemProps = {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
};

type MenuFilterProps = {
  filters: string[];
  currentFilter: string | string[] | undefined;
};

const LinkItem = ({ href, isActive, children }: LinkItemProps) => (
  <Link
    href={href}
    className={clsx(
      "hover:bg-gray-200 px-2 py-1 rounded-md capitalize transition-colors",
      {
        "font-semibold": isActive,
      }
    )}
  >
    {children}
  </Link>
);

const MenuItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="left-12 fixed flex lg:flex-col flex-wrap gap-4 mt-12 w-full lg:max-w-[200px]">
      {children}
    </nav>
  );
};

const MenuFilter = ({ filters, currentFilter }: MenuFilterProps) => {
  return (
    <MenuItem>
      <LinkItem isActive={!currentFilter} key="filter" href="/">
        All
      </LinkItem>
      {filters.map((filter) => (
        <LinkItem
          isActive={filter === currentFilter}
          key={filter}
          href={`/?filter=${filter}`}
        >
          {filter}
        </LinkItem>
      ))}
    </MenuItem>
  );
};
export default MenuFilter;
