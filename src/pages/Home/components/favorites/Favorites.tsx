import Button from "@/components/ui/button";
import { FavoritesRoot } from "./Favorites.styles";

const Favorites = () => {
  return (
    <FavoritesRoot
      className="dashboard__widget dashboard__widget--favorites"
      aria-labelledby="dashboard-favorites-title"
    >
      <header className="">
        <h2 id="dashboard-favorites-title" className="dashboard__widget-title">
          즐겨찾기
        </h2>
        <Button />
      </header>
      <div className="favorites__body">
        <div className="list">
          <div className="item">
            <header>
              <span className="icon">
                <i className="ri-increase-decrease-line"></i>
              </span>
              <span className="icon">즐겨찾기</span>
            </header>
            <span className="menu">전표 등록</span>
          </div>
        </div>
      </div>
    </FavoritesRoot>
  );
};

export default Favorites;
