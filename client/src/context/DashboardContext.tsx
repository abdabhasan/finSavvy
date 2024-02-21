import { useState, createContext, useContext } from "react";
import { CompanySearch } from "../company";
import { searchCompanies } from "../api";
import React, { FC, ReactNode } from "react";

interface DashboardProviderProps {
  children: ReactNode;
}

interface DashboardContextType {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  searchResults: CompanySearch[];
  setSearchResults: (searchResults: CompanySearch[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  error: string;
  setError: (error: string) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const DashboardContext = createContext<DashboardContextType>({
  searchTerm: "",
  setSearchTerm: () => {},
  searchResults: [],
  setSearchResults: () => {},
  isLoading: false,
  setIsLoading: () => {},
  error: "",
  setError: () => {},
  handleChange: () => {},
  handleSubmit: () => {},
});

export const DashboardProvider: FC<DashboardProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    setSearchResults([]);

    try {
      const result = await searchCompanies(searchTerm);
      setSearchResults(result);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
    setIsLoading(false);
  };

  const value: DashboardContextType = {
    searchTerm,
    setSearchTerm,
    searchResults,
    setSearchResults,
    isLoading,
    setIsLoading,
    error,
    setError,
    handleChange,
    handleSubmit,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
