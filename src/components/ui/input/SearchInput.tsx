import type { SearchInputProps } from "@/components/ui/input/types";
import { SearchInputStyles } from "@/components/ui/input/SearchInput.styles";

const SearchInput = ({
  value,
  placeholder = "검색",
  onChange,
  onSearch,
  style,
  ...props
}: SearchInputProps) => {
  return (
    <SearchInputStyles
      value={value}
      placeholder={placeholder}
      allowClear
      onChange={(e) => onChange?.(e.target.value)}
      onSearch={onSearch}
      style={{ width: "100%", ...style }}
      {...props}
    />
  );
};

export default SearchInput;
