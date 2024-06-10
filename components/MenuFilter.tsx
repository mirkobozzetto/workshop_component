import Link from "next/link";

type LinkItemProps = {
  href: string;
  children: React.ReactNode;
};

type MenuFilterProps = {
  filters: string[];
  currentFilter: string | string[] | undefined;
};

const LinkItem = ({ href, children }: LinkItemProps) => (
  <Link
    href={href}
    className="hover:bg-gray-200 px-2 py-1 rounded-md capitalize transition-colors"
  >
    {children}
  </Link>
);

const MenuItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className="flex lg:flex-col flex-wrap gap-4 w-full lg:max-w-[200px]">
      {children}
    </aside>
  );
};

const MenuFilter = ({ filters }: MenuFilterProps) => {
  return (
    <MenuItem>
      <LinkItem key="filter" href="/">
        All
      </LinkItem>
      {filters.map((filter) => (
        <LinkItem key={filter} href={`/?filter=${filter}`}>
          {filter}
        </LinkItem>
      ))}
    </MenuItem>
  );
};
export default MenuFilter;
