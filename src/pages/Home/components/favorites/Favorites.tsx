import Button from "@/components/ui/button";
import { FavoritesRoot } from "./Favorites.styles";
import Header from "./Header";

const Favorites = () => {
  return (
    <FavoritesRoot
      as="section"
      className="dashboard__widget dashboard__widget--favorites"
      aria-labelledby="dashboard-favorites-title"
    >
      <Header />
      <div className="widget__body favorites__body">
        <nav className="favorites__nav" aria-label="즐겨찾기 메뉴">
          <ul className="favorites__list">
            <li className="favorites__item">
              <Button
                className="favorites__action"
                icon={<i className="ri-star-fill" aria-hidden="true" />}
                aria-label="즐겨찾기 관리"
              />
              <span className="favorites__item-meta">
                <span className="favorites__item-icon" aria-hidden="true">
                  <i className="ri-increase-decrease-line" aria-hidden="true" />
                </span>
                <a className="favorites__link" href="#">
                  <span className="favorites__item-label">전표 등록</span>
                </a>
              </span>
            </li>
            <li className="favorites__item">
              <Button
                className="favorites__action"
                icon={<i className="ri-star-fill" aria-hidden="true" />}
                aria-label="즐겨찾기 관리"
              />
              <span className="favorites__item-meta">
                <span className="favorites__item-icon" aria-hidden="true">
                  <i className="ri-wallet-3-line" aria-hidden="true" />
                </span>
                <a className="favorites__link" href="#">
                  <span className="favorites__item-label">예산코드 등록</span>
                </a>
              </span>
            </li>
            <li className="favorites__item">
              <Button
                className="favorites__action"
                icon={<i className="ri-star-fill" aria-hidden="true" />}
                aria-label="즐겨찾기 관리"
              />
              <span className="favorites__item-meta">
                <span className="favorites__item-icon" aria-hidden="true">
                  <i className="ri-increase-decrease-line" aria-hidden="true" />
                </span>
                <a className="favorites__link" href="#">
                  <span className="favorites__item-label">
                    고정자산 마스터 등록
                  </span>
                </a>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </FavoritesRoot>
  );
};

export default Favorites;
