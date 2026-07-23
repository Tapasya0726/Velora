import { useState } from "react";
import "../styles/SettingsDangerZone.css";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ConfirmDialog from "./ConfirmDialog";

export default function SettingsDangerZone() {
  const navigate = useNavigate();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="danger-zone-card">

        <h3>Account</h3>

        <div className="danger-content">

            <div className="danger-text">

                <h4>Logout</h4>

                <p>
                    Sign out of your Velora workspace on this device.
                </p>

            </div>

            <button
                type="button"
                className="delete-account-btn"
                onClick={() => setShowLogoutDialog(true)}
            >
                <FaSignOutAlt />
                Logout
            </button>

        </div>

        <ConfirmDialog
            open={showLogoutDialog}
            title="Logout"
            message="Are you sure you want to logout of your Velora workspace?"
            confirmText="Yes, Logout"
            cancelText="Stay"
            onClose={() => setShowLogoutDialog(false)}
            onConfirm={() => {
                setShowLogoutDialog(false);
                handleLogout();
            }}
        />

    </div>
);
}