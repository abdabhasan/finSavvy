import { CompanySearch } from "../company";

interface Props {
  searchResults: CompanySearch[];
}

const StocksList: React.FC<Props> = ({ searchResults }) => {
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StocksList;
