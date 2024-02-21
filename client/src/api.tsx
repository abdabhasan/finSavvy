import axios from "axios";
import { CompanySearch } from "./company";

const API_KEY = import.meta.env.VITE_FINANCIAL_MODELING_PREP_API_KEY;

export const searchCompanies = async (
  query: string
): Promise<CompanySearch[]> => {
  try {
    const response = await axios.get<CompanySearch[]>(
      `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching data: ", error.message);
      throw new Error(error.message);
    } else {
      console.error("Unexpected error: ", error);
      throw new Error("An unexpected error has occurred.");
    }
  }
};
