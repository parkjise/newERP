import { useEffect, useState, useCallback } from "react";
import { Spin } from "antd";
import type { SelectProps } from "antd";
import {
  FormSelect,
  SelectWrapper,
  Label,
  HelperText,
} from "./Select.styles";
import type { CommonSelectProps, SelectOption } from "./type";

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

export function CommonSelect<V extends string | number = string>({
  label,
  required,
  help,
  error,
  block,
  width,
  options,
  remote,
  showSearch = true,
  filterOption,
  notFoundContent,
  style,
  ...rest
}: CommonSelectProps<V>) {
  const [remoteOptions, setRemoteOptions] = useState<SelectOption<V>[]>([]);
  const [fetching, setFetching] = useState(false);
  const [keyword, setKeyword] = useState("");

  const isRemote = !!remote;
  const debouncedKeyword = useDebounce(keyword, remote?.debounceMs ?? 250);

  useEffect(() => {
    if (!remote) return;

    const q = debouncedKeyword.trim();
    if (q.length < (remote.minLength ?? 1)) {
      setRemoteOptions([]);
      return;
    }

    let cancelled = false;
    setFetching(true);

    remote
      .fetchOptions(q)
      .then((result) => {
        if (!cancelled) setRemoteOptions(result);
      })
      .finally(() => {
        if (!cancelled) setFetching(false);
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedKeyword, isRemote]);

  const mergedOptions = isRemote ? remoteOptions : (options ?? []);

  const computedStyle: React.CSSProperties = {
    ...(block && { width: "100%" }),
    ...(width != null && { width }),
    ...style,
  };

  const defaultFilter: SelectProps<V, SelectOption<V>>["filterOption"] =
    useCallback(
      (input: string, option?: SelectOption<V>) =>
        String(option?.label ?? "")
          .toLowerCase()
          .includes(input.toLowerCase()),
      [],
    );

  return (
    <SelectWrapper>
      {label != null && (
        <Label>
          {label}
          {required && <span className="required">*</span>}
        </Label>
      )}

      <FormSelect
        {...(rest as any)}
        style={computedStyle}
        options={mergedOptions}
        showSearch={showSearch}
        onSearch={isRemote ? setKeyword : rest.onSearch}
        filterOption={isRemote ? false : (filterOption ?? defaultFilter)}
        notFoundContent={
          isRemote
            ? fetching
              ? <Spin size="small" />
              : "검색 결과 없음"
            : (notFoundContent ?? "옵션 없음")
        }
      />

      {error ? (
        <HelperText $error>{error}</HelperText>
      ) : help ? (
        <HelperText>{help}</HelperText>
      ) : null}
    </SelectWrapper>
  );
}
