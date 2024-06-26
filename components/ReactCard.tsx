import { BookOpenText, PlusCircle } from "lucide-react";
import Link from "next/link";
import Button, { buttonVariants } from "./Button";

import { ReactSvg } from "./ReactSvg";

type CardProps = {
  name: string;
  category: string;
  url: string;
};

type ReactCardProps = {
  card: CardProps;
  hideCategory?: string | string[] | undefined;
};

const ReactCard = ({ card, hideCategory }: ReactCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 border-4 hover:border-gray-300 hover:bg-gray-100 shadow my-2 p-4 rounded-lg w-auto transition-colors">
      <div className="flex items-center gap-2 w-full">
        <ReactSvg size={24} />
        <p className="font-bold text-base">React</p>
      </div>
      <p className="line-clamp-1 w-full font-extrabold text-center text-lg overflow-hidden">
        {card.name}
      </p>
      <div className="flex items-center gap-2 w-full">
        {hideCategory ? null : (
          <p className="line-clamp-1 text-gray-400 text-start text-xs">
            {card.category}
          </p>
        )}
        <div className="flex ml-auto">
          <Link
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonVariants({
              variant: "secondary",
            })}  hover:bg-gray-150 no-outline focus:outline-none focus:ring-0 focus:ring-offset-0 cursor-pointer mr-1`}
          >
            <BookOpenText size={16} />
          </Link>
          <Button
            className="hover:bg-gray-150 no-outline focus:outline-none focus:ring-0 focus:ring-offset-0 cursor-pointer"
            variant="secondary"
          >
            <PlusCircle size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ReactCard;
