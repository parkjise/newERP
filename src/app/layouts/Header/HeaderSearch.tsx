import {
  LOCATION_OPTIONS,
  SEARCH_INPUT_WIDTH,
} from "@/app/layouts/Header/Header.config";
import { AutoComplete } from "@/components/ui/input";
const HeaderSearch = () => {
  return (
    <div className="header-search">
      <AutoComplete
        className="header-search__input"
        options={LOCATION_OPTIONS}
        style={{ width: SEARCH_INPUT_WIDTH }}
        allowClear
        placeholder="메뉴를 입력하세요"
        prefix={<i className="ri-search-2-line"></i>}
      />
    </div>
  );
};

export default HeaderSearch;
