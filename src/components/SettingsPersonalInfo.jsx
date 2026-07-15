import { useEffect, useState } from "react";
import api from "../api/axios";
import "../styles/SettingsPersonalInfo.css";

export default function SettingsPersonalInfo({
  fullName,
  email,
  university,
  major,
  year,
  graduationYear,
  onProfileUpdated
}) {
  const [name, setName] = useState("");
const [uni, setUni] = useState("");
const [userMajor, setUserMajor] = useState("");
const [userYear, setUserYear] = useState("");
const [gradYear, setGradYear] = useState("");
const [loading, setLoading] = useState(false);

useEffect(() => {

    setName(fullName);
    setUni(university);
    setUserMajor(major);
    setUserYear(year);
    setGradYear(graduationYear);

}, [
    fullName,
    university,
    major,
    year,
    graduationYear
]);

const handleSave = async () => {

    try {

        setLoading(true);

        await api.put("/profile", {

            name,

            university: uni,

            major: userMajor,

            year: userYear,

            graduation_year: gradYear

        });

        const storedUser = JSON.parse(localStorage.getItem("user"));

localStorage.setItem(
    "user",
    JSON.stringify({
        ...storedUser,
        name
    })
);

       window.dispatchEvent(new Event("userUpdated"));

        onProfileUpdated();

    } catch (error) {

        console.error(error);

        alert(
            error.response?.data?.message ||
            "Failed to update profile."
        );

    } finally {

        setLoading(false);

    }

};
  return (
    <div className="personal-info-card">

      <h3>Personal Information</h3>

      <form className="personal-info-form">

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={name}
    onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            readOnly
          />
        </div>

        <div className="form-row">

          <div className="form-group">
            <label>University</label>
            <input
              type="text"
              value={uni}
    onChange={(e) => setUni(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Major</label>
            <input
              type="text"
              value={userMajor}
    onChange={(e) => setUserMajor(e.target.value)}
            />
          </div>

        </div>

        <div className="form-row">

          <div className="form-group">
            <label>Year</label>
            <input
              type="number"
              value={userYear}
    onChange={(e) => setUserYear(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Graduation Year</label>
            <input
                type="number"
    min="2000"
    max="2100"
    value={gradYear}
    onChange={(e) => setGradYear(e.target.value)}
            />
          </div>

        </div>

     <button
    type="button"
    className="save-btn"
    onClick={handleSave}
    disabled={loading}
>
    {
        loading
            ? "Saving..."
            : "Save Changes"
    }
</button>

      </form>

    </div>
  );
}