import "../styles/SettingsProfileCard.css";

export default function SettingsProfileCard({
  profileImage,
  name,
  email,
}) {
  return (
    <div className="settings-profile-card">

      <div className="profile-left">

        <div className="profile-avatar">

          {profileImage ? (
            <img
              src={profileImage}
              alt={name}
            />
          ) : (
            <span>
              {name
                .split(" ")
                .map((word) => word[0])
                .join("")
                .toUpperCase()}
            </span>
          )}

        </div>

        <div className="profile-details">
          <h3>{name}</h3>
          <p>{email}</p>
        </div>

      </div>
    </div>
  );
}