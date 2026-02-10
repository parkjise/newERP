import ProfileImg from "@/assets/images/profile.png";
import {
  ProfileRoot,
  ProfileHeader,
  ProfileIdentity,
  ProfileContact,
  ProfileVacation,
  ProfileAnnual,
  ProfileBody,
} from "./profile.styles";
import Button from "@/components/ui/button";

const Profile = () => {
  return (
    <ProfileRoot
      as="section"
      className="dashboard__widget dashboard__widget--profile profile"
      aria-labelledby="dashboard-profile-title"
    >
      <ProfileHeader className="profile__header">
        <Button
          className="profile__edit-button"
          icon={<i className="ri-settings-3-line"></i>}
        ></Button>
      </ProfileHeader>
      <ProfileBody className="profile__body">
        <section
          className="profile__panel profile__panel--primary"
          aria-label="사용자 정보"
        >
          <ProfileIdentity className="profile__identity">
            <figure className="profile__avatar" aria-hidden="true">
              <img src={ProfileImg} alt="프로필 이미지" />
            </figure>
            <div className="profile__name">
              <span className="profile__name-text">홍길동 사원</span>
              <span className="profile__team">개발팀</span>
            </div>
          </ProfileIdentity>

          <ProfileContact className="profile__contact">
            <div className="profile__contact-item profile__contact-item--email">
              <span className="profile__contact-icon" aria-hidden="true">
                <i className="ri-mail-line"></i>
              </span>
              <a
                className="profile__contact-link"
                href="mailto:gd.hong@naver.com"
              >
                gd.hong@naver.com
              </a>
            </div>

            <div className="profile__contact-item profile__contact-item--phone">
              <span className="profile__contact-icon" aria-hidden="true">
                <i className="ri-smartphone-line"></i>
              </span>
              <a className="profile__contact-link" href="tel:01012345678">
                010-1234-5678
              </a>
            </div>
          </ProfileContact>
        </section>

        <section
          className="profile__panel profile__panel--secondary"
          aria-label="휴가 및 연차"
        >
          <ProfileVacation className="profile__vacation" aria-label="정기휴가">
            <div className="profile__vacation-summary">
              <span className="profile__vacation-label">정기휴가 잔여</span>
              <span className="profile__vacation-value">5일</span>
            </div>
            <div className="profile__vacation-bar" aria-hidden="true">
              <div className="progress__fill" style={{ width: "30%" }} />
            </div>
          </ProfileVacation>

          <ProfileAnnual className="profile__annual" aria-label="연차 현황">
            <dl className="profile__annual-list">
              <div className="profile__annual-item">
                <dt className="profile__annual-term">총연차</dt>
                <dd className="profile__annual-desc">16</dd>
              </div>

              <div className="profile__annual-item">
                <dt className="profile__annual-term">잔여 연차</dt>
                <dd className="profile__annual-desc">13</dd>
              </div>

              <div className="profile__annual-item">
                <dt className="profile__annual-term">사용 연차</dt>
                <dd className="profile__annual-desc">3</dd>
              </div>
            </dl>
          </ProfileAnnual>
        </section>
      </ProfileBody>
    </ProfileRoot>
  );
};

export default Profile;
