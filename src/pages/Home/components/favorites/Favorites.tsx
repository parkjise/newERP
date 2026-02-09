import { FavoritesRoot } from "./Favorites.styles";

const Favorites = () => {
  return (
    <FavoritesRoot
      className="dashboard__widget dashboard__widget--favorites"
      aria-labelledby="dashboard-favorites-title"
    >
      <h2 id="dashboard-favorites-title" className="dashboard__widget-title">
        즐겨찾기
      </h2>
    </FavoritesRoot>
  );
};

export default Favorites;
