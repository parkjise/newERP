import {
  SideBarHeaderRoot,
  Heading,
  HeadingText,
  HeadingContent,
  HeadingIcon,
  HeadingBadge,
} from "./SideBarHeader.styles";

const SideBarHeader = () => {
  return (
    <SideBarHeaderRoot className="sidebar__header">
      <Heading className="sidebar__heading">
        <HeadingIcon className="sidebar__heading-icon icon" aria-hidden="true">
          <i className="ri-star-line"></i>
        </HeadingIcon>
        <HeadingContent>
          <HeadingText className="sidebar__heading-text">즐겨찾기</HeadingText>
          <HeadingBadge
            className="sidebar__heading-badge"
            aria-label="즐겨찾기 개수"
          >
            5
          </HeadingBadge>
        </HeadingContent>
      </Heading>
    </SideBarHeaderRoot>
  );
};

export default SideBarHeader;
