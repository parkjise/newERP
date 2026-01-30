import type { InputProps } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import type { AutoCompleteProps } from "antd";

// 공통 필드 타입
interface CommonInputFields {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  error?: boolean;
  fullWidth?: boolean;
  containerClassName?: string;
}

export type BaseInputProps = InputProps & CommonInputFields;

export type SearchInputProps = Omit<SearchProps, "onChange"> & {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
};

export type BaseAutoColpleteProps = Omit<
  AutoCompleteProps,
  "onChange" | "option"
> &
  CommonInputFields & {
    /** antd 옵션 그대로 사용 */
    options?: AutoCompleteProps["options"];
    /** 우리 공통 규격: string으로 통일 */
    value?: string;
    onChange?: (value: string) => void;
  };
