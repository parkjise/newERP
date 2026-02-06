import React from "react";
import { Tag } from "antd";
import type { CommonTagProps } from "./Types";
import { STATUS_COLOR_MAP } from "./Tag.config";
const CommonTag: React.FC<CommonTagProps> = ({
  text,
  status = "default",
  customColor,
  style,
  ...restProps // 나머지 antd props (onClose, icon 등)
}) => {
  // 3. 색상 결정 로직
  // customColor가 있으면 우선 적용, 없으면 status 맵핑 적용
  const colorToUse = customColor || STATUS_COLOR_MAP[status];

  return (
    <Tag
      color={colorToUse}
      style={{
        fontWeight: 400, // 공통 스타일 예시
        borderRadius: "4px",
        ...style,
      }}
      {...restProps}
    >
      {text}
    </Tag>
  );
};

export default CommonTag;
