import {
  LOCATION_OPTIONS,
  SEARCH_INPUT_WIDTH,
} from "@/app/layouts/Header/Header.config";
import { AutoComplete } from "@/components/ui/input";
const HeaderSearch = () => {
  return (
    <div className="header__search-group">
      <AutoComplete
        className="ac-center"
        options={LOCATION_OPTIONS}
        style={{ width: SEARCH_INPUT_WIDTH }}
        allowClear
        placeholder="지역을 입력하세요"
        prefix={<i className="ri-search-2-line"></i>}
      />
    </div>
  );
};

export default HeaderSearch;
