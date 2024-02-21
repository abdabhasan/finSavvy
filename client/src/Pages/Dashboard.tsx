import { Searchbar, StocksList, Loading } from "../Components";
import { useDashboardContext } from "../context/DashboardContext";

const Dashboard: React.FC = (): JSX.Element => {
  const {
    searchTerm,
    searchResults,
    isLoading,
    error,
    handleChange,
    handleSubmit,
  } = useDashboardContext();

  return (
    <main className="flex-grow relative">
      <Searchbar
        searchTerm={searchTerm}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {searchResults && searchResults.length > 0 && (
        <StocksList searchResults={searchResults} />
      )}
      {/* error message */}
      {error && <div>Error: {error}</div>}

      {/* loading */}
      {isLoading && <Loading />}
    </main>
  );
};

export default Dashboard;
