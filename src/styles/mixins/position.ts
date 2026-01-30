import { css } from "styled-components";

type AbsoluteOptions = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  zIndex?: number;
};

type AbsoluteIconOptions = {
  size?: number;
  offset?: number;
};

type ConditionalAbsoluteProps = {
  enabled?: boolean;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

export const absolute = ({
  top,
  right,
  bottom,
  left,
  zIndex,
}: AbsoluteOptions = {}) => css`
  position: absolute;
  ${top && `top:${top};`}
  ${right && `right:${right};`}
  ${bottom && `bottom:${bottom};`}
  ${left && `left:${left};`}
  ${zIndex !== undefined && `z-index:${zIndex};`}
`;

export const absoluteCenterXY = () => css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const absoluteCenterX = () => css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const absoluteCenterY = () => css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const absoluteInset = (inset: string = "0") => css`
  position: absolute;
  inset: ${inset};
`;

export const absoluteIcon = ({
  size = 16,
  offset = 0,
}: AbsoluteIconOptions = {}) => css`
  position: absolute;
  top: ${offset}px;
  right: ${offset}px;
  width: ${size}px;
  height: ${size}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const conditionalAbsolute = ({
  enabled = false,
  top = "0",
  right = "0",
  bottom,
  left,
}: ConditionalAbsoluteProps) => css`
  ${enabled &&
  css`
    position: absolute;
    ${top && `top:${top};`}
    ${right && `right:${right};`}
    ${bottom && `bottom:${bottom};`}
    ${left && `left:${left};`}
  `}
`;
