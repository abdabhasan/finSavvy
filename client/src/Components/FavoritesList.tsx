import Card from "../Components/Card";
import { useDashboardContext } from "../context/DashboardContext";

const FavoritesList: React.FC = (): JSX.Element => {
  const { favorites } = useDashboardContext();
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {favorites.map((item) => {
        return <Card key={item.symbol} stock={item} />;
      })}
    </main>
  );
};

export default FavoritesList;
