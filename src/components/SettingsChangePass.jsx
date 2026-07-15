import { useState } from "react";
import api from "../api/axios";
import "../styles/SettingsChangePass.css";

export default function SettingsChangePass() {
  const [currentPassword, setCurrentPassword] = useState("");
const [newPassword, setNewPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const [loading, setLoading] = useState(false);

const handleChangePassword = async () => {

    if (
        !currentPassword ||
        !newPassword ||
        !confirmPassword
    ) {

        alert("Please fill all fields.");

        return;

    }

    try {

        setLoading(true);

        const response = await api.put(
            "/change-password",
            {
                currentPassword,
                newPassword,
                confirmPassword
            }
        );

        alert(response.data.message);

        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");

    } catch (error) {

        console.error(error);

        alert(
            error.response?.data?.message ||
            "Failed to update password."
        );

    } finally {

        setLoading(false);

    }

};
  return (
    <div className="change-password-card">

      <h3>Change Password</h3>

      <form className="change-password-form">

        <div className="form-group">
          <label>Current Password</label>
          <input
    type="password"
    placeholder="Enter current password"
    value={currentPassword}
    onChange={(e) =>
        setCurrentPassword(e.target.value)
    }
/>
        </div>

        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            placeholder="Minimum 8 characters"
            value={newPassword}
    onChange={(e) =>
        setNewPassword(e.target.value)
    }
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Re-enter new password"
             value={confirmPassword}
    onChange={(e) =>
        setConfirmPassword(e.target.value)
    }
          />
        </div>

       <button
    type="button"
    className="update-password-btn"
    onClick={handleChangePassword}
    disabled={loading}
>
    {
        loading
            ? "Updating..."
            : "Update Password"
    }
</button>

      </form>

    </div>
  );
}