import Link from "next/link";

type StyledLinkProps = {
  href: string;
  children: React.ReactNode;
};

type MenuFilterProps = {
  filters: string[];
};

const StyledLink = ({ href, children }: StyledLinkProps) => (
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
      <StyledLink key="all" href="/?filter=all">
        All
      </StyledLink>
      {filters.map((filter) => (
        <StyledLink key={filter} href={`/?filter=${filter}`}>
          {filter}
        </StyledLink>
      ))}
    </MenuItem>
  );
};
export default MenuFilter;
