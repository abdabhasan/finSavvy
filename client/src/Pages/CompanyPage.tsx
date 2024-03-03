import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CompanyProfile } from "../company";
import { getCompanyProfile } from "../api";
import { Loading } from "../Components";

const Company: React.FC = (): JSX.Element => {
  const { symbol } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getProfileInit = async () => {
      setIsLoading(true);
      const result = await getCompanyProfile(symbol!);
      setCompany(result?.data[0]);
      setIsLoading(false);
    };
    getProfileInit();
  }, []);

  return (
    <main className="flex-grow mx-10 p-6">
      {isLoading && <Loading />}

      {company && <h1>{company.companyName}</h1>}
    </main>
  );
};

export default Company;
