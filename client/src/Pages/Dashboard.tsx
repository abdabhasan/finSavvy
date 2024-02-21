import { Searchbar, StocksList, Loading } from "../Components";
import { useDashboardContext } from "../context/DashboardContext";

const Dashboard: React.FC = (): JSX.Element => {
  const { searchResults, isLoading, error } = useDashboardContext();

  return (
    <main className="flex-grow relative">
      <Searchbar />

      {searchResults && searchResults.length > 0 && <StocksList />}
      {/* error message */}
      {error && <div>Error: {error}</div>}

      {/* loading */}
      {isLoading && <Loading />}
    </main>
  );
};

export default Dashboard;
