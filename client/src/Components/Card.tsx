import { CompanySearch } from "../company";
import { useDashboardContext } from "../context/DashboardContext";

interface Props {
  stock: CompanySearch;
}

const Card: React.FC<Props> = ({ stock }: Props): JSX.Element => {
  const { removeFavorite } = useDashboardContext();

  const handleRemoveFavorite = (stock: CompanySearch) => {
    removeFavorite(stock);
  };

  return (
    <div className="card max-w-sm bg-neutral shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{stock.symbol}</h2>
        <p>{stock.currency}</p>
        <p>{stock.stockExchange}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleRemoveFavorite(stock)}
            className="btn text-white bg-rose-500 hover:bg-rose-700 transition-all duration-300"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
