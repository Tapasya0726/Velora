import "../styles/SettingsDangerZone.css";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SettingsDangerZone() {
  const navigate = useNavigate();

const handleLogout = () => {

    const confirmLogout = window.confirm(
        "Are you sure you want to logout?"
    );

    if (!confirmLogout) {
        return;
    }

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
                onClick={handleLogout}
            >
                <FaSignOutAlt />
                Logout
            </button>

        </div>

    </div>
);
}