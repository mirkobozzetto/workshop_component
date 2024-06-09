import { ShoppingBasket, User } from "lucide-react";
import Button from "./Button";
import { ReactSvg } from "./ReactSvg";

const Header = () => {
  return (
    <header className="flex items-center py-4 w-full">
      <h1 className="inline-flex items-center gap-2 font-bold text-lg">
        <ReactSvg size={32} />
        <span>ReactJourney</span>
      </h1>
      <div className="flex items-center gap-2 ml-auto">
        <Button variant="ghost">
          <ShoppingBasket size={24} />
        </Button>
        <Button variant="ghost">
          <User size={24} />
        </Button>
      </div>
    </header>
  );
};
export default Header;
