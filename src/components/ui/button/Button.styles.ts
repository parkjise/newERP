// Button.styles.ts
import styled, { css } from "styled-components";
import { Button as AntButton } from "antd";
import type { ButtonVariant, ButtonSize } from "./types";

type StyledProps = {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
};

const sizeStyles = {
  sm: css`
    height: 28px;
    padding: 0 10px;
    font-size: 12px;
    border-radius: 2px;
  `,
  md: css`
    height: 36px;
    padding: 0 14px;
    font-size: 14px;
    border-radius: 2px;
  `,
  lg: css`
    height: 44px;
    padding: 0 78px;
    font-size: 16px;
    border-radius: 2px;
  `,
} satisfies Record<ButtonSize, ReturnType<typeof css>>;

const variantStyles = {
  primary: css`
    /* 예시: 토큰/변수로 관리 추천 */
    background: #1677ff;
    border-color: #1677ff;
    color: #fff;

    &:hover {
      background: #4096ff;
      border-color: #4096ff;
      color: #fff;
    }
  `,
  secondary: css`
    background: #fff;
    border-color: #d9d9d9;
    color: #111;

    &:hover {
      border-color: #4096ff;
      color: #111;
    }
  `,
  danger: css`
    background: #ff4d4f;
    border-color: #ff4d4f;
    color: #fff;

    &:hover {
      background: #ff7875;
      border-color: #ff7875;
      color: #fff;
    }
  `,
  text: css`
    background: transparent;
    border-color: transparent;
    color: #111;

    &:hover {
      background: rgba(0, 0, 0, 0.04);
      border-color: transparent;
      color: #111;
    }
  `,
  ghost: css`
    background: transparent;
    border-color: rgba(255, 255, 255, 0.7);
    color: #fff;

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: #fff;
      color: #fff;
    }
  `,
  link: css`
    background: transparent;
    border-color: transparent;
    color: #1677ff;
    padding: 0; /* 링크 느낌이면 패딩 줄이기도 */

    &:hover {
      background: transparent;
      color: #4096ff;
    }
  `,
} satisfies Record<ButtonVariant, ReturnType<typeof css>>;

/**
 * Antd는 기본 스타일이 강해서
 * styled-components에선 `&&`로 우선순위를 올려주는게 흔한 패턴
 */
export const ButtonStyles = styled(AntButton)<StyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: none;
  ${({ $fullWidth }) => ($fullWidth ? "width: 100%;" : "")}

  ${({ $size }) => sizeStyles[$size]}
    ${({ $variant }) => variantStyles[$variant]}

   
  /* disabled 공통 */
  &:disabled,
  &.ant-btn-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
