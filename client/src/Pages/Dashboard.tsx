import { useState } from "react";
import { searchCompanies } from "../api";
import { CompanySearch } from "../company";

import { Searchbar, StocksList, Loading } from "../Components";

const Dashboard: React.FC = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    setSearchResults([]);

    const result = await searchCompanies(searchTerm);

    if (typeof result === "string") {
      // An error occurred
      setError(result);
    } else {
      // Successful API call Process the data
      console.log(result);
      setSearchResults(result);
    }

    setIsLoading(false);
  };

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
