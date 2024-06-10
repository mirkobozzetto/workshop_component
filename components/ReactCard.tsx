// import cardsData from '@/data/cardsData';
type CardProps = {
  name: string;
  category: string;
  url: string;
};

const ReactCard = ({ card }: { card: CardProps }) => {
  return (
    //
    <div className="flex flex-col justify-center items-center gap-4 border-4 hover:border-gray-300 hover:bg-gray-100 shadow p-4 rounded-lg transition-colors">
      <p>{card.name}</p>
      <p>{card.category}</p>
    </div>
  );
};
export default ReactCard;
