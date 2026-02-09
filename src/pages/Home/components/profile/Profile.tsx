import { ProfileRoot } from "./profile.styles";

const Profile = () => {
  return (
    <ProfileRoot
      className="dashboard__widget dashboard__widget--profile"
      aria-labelledby="dashboard-profile-title"
    >
      <h2 id="dashboard-profile-title" className="dashboard__widget-title">
        Profile
      </h2>
    </ProfileRoot>
  );
};

export default Profile;
