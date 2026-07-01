import "../styles/SettingsChangePass.css";

export default function SettingsChangePass() {
  return (
    <div className="change-password-card">

      <h3>Change Password</h3>

      <form className="change-password-form">

        <div className="form-group">
          <label>Current Password</label>
          <input
            type="password"
            placeholder="Enter current password"
          />
        </div>

        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            placeholder="Minimum 8 characters"
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Re-enter new password"
          />
        </div>

        <button
          type="button"
          className="update-password-btn"
        >
          Update Password
        </button>

      </form>

    </div>
  );
}