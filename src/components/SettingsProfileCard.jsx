import "../styles/SettingsProfileCard.css";
import { FaCamera } from "react-icons/fa";

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

      <button className="change-photo-btn">
        <FaCamera />
        Change Photo
      </button>

    </div>
  );
}