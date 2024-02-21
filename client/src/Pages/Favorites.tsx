import FavoritesList from "../Components/FavoritesList";

const Favorites: React.FC = (): JSX.Element => {
  return (
    <main className="flex-grow p-6 mx-10 mt-6">
      <FavoritesList />
    </main>
  );
};

export default Favorites;
