import "../styles/SettingsDangerZone.css";
import { FaTrashAlt } from "react-icons/fa";

export default function SettingsDangerZone() {
  return (
    <div className="danger-zone-card">

      <h3>Danger Zone</h3>

      <div className="danger-content">

        <div className="danger-text">
          <h4>Delete Account</h4>
          <p>
            Permanently delete your Velora account and all your data.
            This action cannot be undone.
          </p>
        </div>

        <button
          type="button"
          className="delete-account-btn"
        >
          <FaTrashAlt />
          Delete Account
        </button>

      </div>

    </div>
  );
}