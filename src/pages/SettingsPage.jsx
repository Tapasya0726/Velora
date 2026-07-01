import AppLayout from "../layouts/AppLayout";

import SettingsProfileCard from "../components/SettingsProfileCard";
import SettingsPersonalInfo from "../components/SettingsPersonalInfo";
import SettingsChangePass from "../components/SettingsChangePass";
import SettingsDangerZone from "../components/SettingsDangerZone";

import "../styles/SettingsPage.css";

export default function SettingsPage() {

    const user = {
        profileImage: "",
        fullName: "John Doe",
        email: "john@example.com",
        university: "UPES",
        major: "Computer Science",
        year: "3rd Year",
        graduationYear: "2027"
    };

    return (
        <AppLayout>

            <div className="settings-page">

                {/* Header */}

                <div className="settings-header">
                    <h6>ACCOUNT</h6>
                    <h2>Settings</h2>
                    <p>
                        Manage your profile, account information and security.
                    </p>
                </div>

                {/* Profile Card */}

                <SettingsProfileCard
                    profileImage={user.profileImage}
                    name={user.fullName}
                    email={user.email}
                />

                {/* Personal Information */}

                <SettingsPersonalInfo
                    fullName={user.fullName}
                    email={user.email}
                    university={user.university}
                    major={user.major}
                    year={user.year}
                    graduationYear={user.graduationYear}
                />

                {/* Change Password */}

                <SettingsChangePass />

                {/* Danger Zone */}

                <SettingsDangerZone />

            </div>

        </AppLayout>
    );
}