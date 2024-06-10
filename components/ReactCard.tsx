import { PlusCircle } from "lucide-react";
import Button from "./Button";

import { ReactSvg } from "./ReactSvg";

type CardProps = {
  name: string;
  category: string;
  url: string;
};

const ReactCard = ({ card }: { card: CardProps }) => {
  return (
    //
    <div className="flex flex-col justify-center items-center gap-4 border-4 hover:border-gray-300 hover:bg-gray-100 shadow my-2 p-4 rounded-lg w-80 transition-colors">
      <div className="flex items-center gap-2 w-full">
        <ReactSvg size={24} />
        <p className="font-bold text-base">React</p>
      </div>
      <p className="line-clamp-1 w-full font-extrabold text-center text-lg overflow-hidden">
        {card.name}
      </p>
      <div className="flex items-center gap-2 w-full">
        <p className="line-clamp-1 text-gray-400 text-start text-xs">
          {card.category}
        </p>
        <Button variant="secondary">
          <PlusCircle size={16} />
        </Button>
      </div>
    </div>
  );
};
export default ReactCard;