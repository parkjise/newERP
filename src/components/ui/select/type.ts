import type { SelectProps } from "antd";

export type SelectOption<V extends string | number = string> = {
  label: React.ReactNode;
  value: V;
  disabled?: boolean;
};

export type CommonSelectProps<V extends string | number = string> = Omit<
  SelectProps<V, SelectOption<V>>,
  "options"
> & {
  label?: React.ReactNode;
  required?: boolean;
  help?: React.ReactNode;
  error?: React.ReactNode;

  options?: SelectOption<V>[];

  /** 레이아웃 */
  block?: boolean;
  width?: number | string;

  /** 원격 검색 — 객체를 전달하면 자동 활성화 */
  remote?: {
    fetchOptions: (keyword: string) => Promise<SelectOption<V>[]>;
    debounceMs?: number;
    minLength?: number;
  };
};

/** @deprecated SelectOption 사용 */
export type CommonOption<V extends string | number = string> = SelectOption<V>;
