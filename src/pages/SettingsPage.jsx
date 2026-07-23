import { useEffect, useState } from "react";
import api from "../api/axios";
import AppLayout from "../layouts/AppLayout";

import SettingsProfileCard from "../components/SettingsProfileCard";
import SettingsPersonalInfo from "../components/SettingsPersonalInfo";
import SettingsChangePass from "../components/SettingsChangePass";
import SettingsDangerZone from "../components/SettingsDangerZone";

import "../styles/SettingsPage.css";

export default function SettingsPage() {
    const [user, setUser] = useState(null);

const fetchProfile = async () => {

        try {

            const response = await api.get("/profile");

            console.log(response.data);

            setUser(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    useEffect(() => {

    

    fetchProfile();

}, []);

if (!user) {

    return (
        <AppLayout>
            <div className="page-loading">
                <div className="page-loading__spinner" aria-hidden="true" />
                <h2>Loading your settings…</h2>
                <p>Fetching your profile details and account preferences.</p>
            </div>
        </AppLayout>
    );

}
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
                    profileImage=""
                    name={user.name}
                    email={user.email}
                />

                {/* Personal Information */}

                <SettingsPersonalInfo
                    fullName={user.name}
                    email={user.email}
                    university={user.university}
                    major={user.major}
                    year={user.year}
                    graduationYear={user.graduation_year}
                    onProfileUpdated={fetchProfile}
                />

                {/* Change Password */}

                <SettingsChangePass />

                {/* Danger Zone */}

                <SettingsDangerZone />

            </div>

        </AppLayout>
    );
}