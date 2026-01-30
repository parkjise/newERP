import type { BaseAutoColpleteProps } from "@/components/ui/input/types";
import {
  AutoCompleteWrapper,
  AutoCompleteStyles,
} from "@/components/ui/input/AutoComplete.styles";

const AutoComplete = ({
  label,
  helperText,
  error,
  fullWidth = true,
  containerClassName,
  value,
  onChange,
  options,
  style,
  ...props
}: BaseAutoColpleteProps) => {
  return (
    <AutoCompleteWrapper className={containerClassName}>
      {label ? <label>{label}</label> : null}
      <AutoCompleteStyles
        value={value}
        options={options}
        onChange={(v) => onChange?.(String(v))}
        style={{ width: "100%", ...style }}
        {...props}
      />
      {helperText ? "test" : null}
    </AutoCompleteWrapper>
  );
};

export default AutoComplete;
