import { forwardRef } from "react";
import { type InputRef } from "antd";
import type { BaseInputProps } from "@/components/ui/input/types";
import { InputStyles } from "@/components/ui/input/Input.styles";
const BaseInput = forwardRef<InputRef, BaseInputProps>(
  (
    {
      label,
      helperText,
      error,
      fullWidth,
      containerClassName,
      style,
      status,
      ...props
    },
    ref
  ) => {
    const mergedStatus = error ? "error" : status;
    return (
      <InputStyles
        ref={ref}
        allowClear
        status={mergedStatus}
        style={{ width: "100%", ...style }}
        {...props}
      />
    );
  }
);
BaseInput.displayName = "BaseInput";
export default BaseInput;
