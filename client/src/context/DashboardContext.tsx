import { useState, createContext, useContext } from "react";
import { CompanySearch } from "../company";
import { searchCompanies } from "../api";
import React, { FC, ReactNode } from "react";
import { toast } from "react-toastify";

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
  favorites: CompanySearch[];
  addFavorite: (stock: CompanySearch) => void;
  removeFavorite: (stock: CompanySearch) => void;
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
  favorites: [],
  handleChange: () => {},
  handleSubmit: () => {},
  addFavorite: () => {},
  removeFavorite: () => {},
});

export const DashboardProvider: FC<DashboardProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [favorites, setFavorites] = useState<CompanySearch[]>([]);

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

  const addFavorite = (stock: CompanySearch) => {
    setFavorites((prevFavorites) => {
      // Check if the stock is already in favorites
      if (prevFavorites.find((f) => f.symbol === stock.symbol)) {
        toast("The stock already on the list!", {
          className: `bg-rose-500 text-white`,
        });
        return prevFavorites;
      }
      toast("The stock added!", {
        className: `bg-rose-500 text-white`,
      });
      return [...prevFavorites, stock];
    });
  };

  const removeFavorite = (stock: CompanySearch) => {
    setFavorites((prevFavorites) => {
      toast("The stock removed!", {
        className: `bg-rose-500 text-white`,
      });
      return prevFavorites.filter((f) => f.symbol !== stock.symbol);
    });
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
    favorites,
    addFavorite,
    removeFavorite,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
