import styled from "styled-components";
import { flex, text } from "@/styles/mixins";
export const ProfileRoot = styled.section`
  position: relative;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProfileHeader = styled.header`
  position: absolute;
  right: 10px;
  top: 10px;
  .profile__edit-button {
    width: 24px;
    height: 24px;
    background-color: transparent;
    border: none;
    box-shadow: none;
    color: ${({ theme }) => theme.colors.neutral[600]};
    ${text("18px")}
    &:hover {
      color: ${({ theme }) => theme.colors.neutral[800]} !important;
      background-color: transparent !important;
      border: transparent !important;
      box-shadow: transparent !important;
    }
  }
`;
export const ProfileBody = styled.div`
  ${flex("flex-start", "space-between", "column")}
  flex: 1;
  .profile__panel {
    width: 100%;
    &--secondary {
      ${flex("", "flex-start", "column", "20px")}
    }
  }
`;
export const ProfileIdentity = styled.div`
  ${flex("center", "flex-start", "row", "15px")}
  .profile {
    &__avatar {
      width: 60px;
      height: 60px;
      border-radius: 20px;
      overflow: hidden;
    }
    &__name {
      ${flex("flex-start", "flex-start", "column")}
      &-text {
        ${text("16px", 400)}
        color: ${({ theme }) => theme.colors.neutral[800]};
      }
    }
    &__team {
      ${text("13px", 300)}
      color: ${({ theme }) => theme.colors.neutral[600]};
    }
  }
`;

export const ProfileContact = styled.address`
  font-style: normal;
  margin-top: 20px;
  ${flex("flex-start", "flex-start", "column", "10px")}
  .profile {
    &__contact {
      &-item {
        ${flex("center", "flex-start", "row", "10px")}
      }
      &-icon {
        ${flex("center", "center")}
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.grey[300]};
        i {
          ${text("14px")}
          color: ${({ theme }) => theme.colors.white};
          line-height: 24px;
        }
      }
      &-link {
        ${text("13px", 300)}
        text-decoration: none;
        color: ${({ theme }) => theme.colors.neutral[700]};
      }
    }
  }
`;

export const ProfileVacation = styled.section`
  border-radius: 4px;
  background-color: #f5f9ff;
  border: 1px solid #dde5f0;
  padding: 15px 10px;
  ${flex("center", "center", "column", "15px")}
  .profile {
    &__vacation {
      &-summary {
        ${text("13px", 400)}
        color: ${({ theme }) => theme.accent.primary};
      }
      &-value {
        padding-left: 5px;
      }
    }
  }
  .profile__vacation-bar {
    width: 100%;
    height: 6px;
    border-radius: 999px;
    background: #dde4ee;
    overflow: hidden;
    position: relative;
  }
  .progress__fill {
    height: 100%;
    width: 0%;
    border-radius: inherit;
    background: linear-gradient(90deg, #6c89ba, #3d5a8b); /* 필 */
    transition: width 220ms ease;
  }

  .progress__fill::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.35),
      rgba(255, 255, 255, 0)
    );
  }
`;

export const ProfileAnnual = styled.section`
  .profile {
    &__annual {
      &-list {
        ${flex("center", "flex-start", "row", "10px")}
      }
      &-item {
        height: 100%;
        ${flex("center", "center", "column")}
        padding: 10px;
        flex: 1;
        border-radius: 4px;
        background: #f7f8f9;
        border: 1px solid #efefef;
        max-height: 67px;
      }
      &-term {
        ${text("12px", 300)}
        color: ${({ theme }) => theme.colors.neutral[600]};
      }
      &-desc {
        ${text("18px", 700)}
        color: ${({ theme }) => theme.colors.neutral[800]};
      }
    }
  }
`;
