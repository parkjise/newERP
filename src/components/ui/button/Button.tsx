import React, { forwardRef } from "react";
import type { ButtonProps as AntdButtonProps } from "antd";
import type { AppButtonProps } from "@/components/ui/button/types";
import { ButtonStyles } from "@/components/ui/button/Button.styles";

function mapSize(size: AppButtonProps["size"]): AntdButtonProps["size"] {
  switch (size) {
    case "sm":
      return "small";
    case "lg":
      return "large";
    case "md":
    default:
      return "middle";
  }
}

function mapVariant(
  variant: AppButtonProps["variant"]
): Pick<AntdButtonProps, "type" | "danger" | "ghost"> {
  switch (variant) {
    case "primary":
      return { type: "primary" };
    case "secondary":
      return { type: "default" };
    case "danger":
      return { type: "primary", danger: true };
    case "text":
      return { type: "text" };
    case "ghost":
      return { type: "default", ghost: true };
    case "link":
      return { type: "link" };
    default:
      return { type: "default" };
  }
}

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  AppButtonProps
>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      leftIcon,
      rightIcon,
      loadingText,
      children,
      style,
      ...rest
    },
    ref
  ) => {
    const antdSize = mapSize(size);
    const { type, danger, ghost } = mapVariant(variant);

    return (
      <ButtonStyles
        ref={ref}
        type={type}
        danger={danger}
        ghost={ghost}
        size={antdSize}
        icon={leftIcon}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        style={{
          ...(fullWidth ? { width: "100%" } : {}),
          ...style,
        }}
        {...rest}
      >
        {rest.loading && loadingText ? loadingText : children}
        {rightIcon ? <span style={{ marginLeft: 8 }}>{rightIcon}</span> : null}
      </ButtonStyles>
    );
  }
);

Button.displayName = "Button";
export default Button;
