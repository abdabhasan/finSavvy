import { Link } from "react-router-dom";
import { CompanySearch } from "../company";
import { useDashboardContext } from "../context/DashboardContext";

const StocksList: React.FC = () => {
  const { searchResults, addFavorite } = useDashboardContext();

  const handleAddToFavorites = (stock: CompanySearch) => {
    addFavorite(stock);
  };

  return (
    <div className="relative overflow-x-auto p-6 mx-10 mt-6">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Symbol
            </th>
            <th scope="col" className="px-6 py-3">
              Exchange
            </th>
            <th scope="col" className="px-6 py-3">
              Currency
            </th>
            <th scope="col" className="px-6 py-3">
              Info
            </th>
            <th scope="col" className="px-6 py-3">
              Favorite
            </th>
          </tr>
        </thead>
        <tbody>
          {searchResults.slice(0, 5).map((stock, index) => {
            return (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {stock.name}
                </th>
                <td className="px-6 py-4">{stock.symbol}</td>
                <td className="px-6 py-4">{stock.exchangeShortName}</td>
                <td className="px-6 py-4">{stock.currency}</td>
                <td className="px-6 py-4">
                  <Link
                    to={`/company/${stock.symbol}`}
                    className="text-rose-500 bg-rose-50 hover:bg-rose-500 hover:text-rose-50 px-2 py-1 rounded transition-all duration-300"
                  >
                    More
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleAddToFavorites(stock)}
                    className="text-white bg-rose-500 hover:bg-rose-700 px-2 py-1 rounded transition-all duration-300"
                  >
                    Add
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StocksList;
