import Button from "@/components/ui/button";
import { FavoritesRoot } from "./Favorites.styles";
import Header from "@/pages/Home/components/header/Header";
import { useState } from "react";

const FavoritesDatas = [
  {
    id: 1,
    icon: "ri-increase-decrease-line",
    menu: "전표 등록",
  },
  {
    id: 2,
    icon: "ri-wallet-3-line",
    menu: "예산코드 등록",
  },
  {
    id: 3,
    icon: "ri-increase-decrease-line",
    menu: "고정자산 마스터 등록",
  },
];

const Favorites = () => {
  const [activeIds, setActiveIds] = useState<number[]>([]);

  const handleToggleClick = (id: number) => {
    setActiveIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <FavoritesRoot
      as="section"
      className="dashboard__widget dashboard__widget--favorites"
      aria-labelledby="dashboard-favorites-title"
    >
      <Header
        title="즐겨찾기"
        className="widget__head favorites__header"
        titleClassName="favorites__title widget__title"
      >
        <Button
          className="widget__refresh"
          icon={<i className="ri-restart-line" aria-hidden="true" />}
          aria-label="새로고침"
        />
      </Header>
      <div className="widget__body favorites__body">
        <nav className="favorites__nav" aria-label="즐겨찾기 메뉴">
          <ul className="favorites__list">
            {FavoritesDatas.map((data) => {
              const isActive = activeIds.includes(data.id);
              return (
                <li className="favorites__item" key={data.id}>
                  <Button
                    className="favorites__action"
                    icon={
                      <i
                        className={
                          isActive ? "ri-star-fill active" : "ri-star-fill"
                        }
                        aria-hidden="true"
                      />
                    }
                    aria-label="즐겨찾기 관리"
                    onClick={() => handleToggleClick(data.id)}
                  />
                  <span className="favorites__item-meta">
                    <span className="favorites__item-icon" aria-hidden="true">
                      <i className={data.icon} aria-hidden="true" />
                    </span>
                    <a className="favorites__link" href="#">
                      <span className="favorites__item-label">{data.menu}</span>
                    </a>
                  </span>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </FavoritesRoot>
  );
};

export default Favorites;
