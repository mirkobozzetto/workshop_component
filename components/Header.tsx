import { ReactSvg } from "./ReactSvg";
const Header = () => {
  return (
    <header className="flex items-center py-4 w-full">
      <h1 className="inline-flex items-center gap-2 font-bold text-lg">
        <ReactSvg size={32} />
        <span>React Journey</span>
      </h1>
    </header>
  );
};
export default Header;
