import "../styles/SettingsPersonalInfo.css";

export default function SettingsPersonalInfo({
  fullName,
  email,
  university,
  major,
  year,
  graduationYear,
}) {
  return (
    <div className="personal-info-card">

      <h3>Personal Information</h3>

      <form className="personal-info-form">

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            defaultValue={fullName}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            defaultValue={email}
          />
        </div>

        <div className="form-row">

          <div className="form-group">
            <label>University</label>
            <input
              type="text"
              defaultValue={university}
            />
          </div>

          <div className="form-group">
            <label>Major</label>
            <input
              type="text"
              defaultValue={major}
            />
          </div>

        </div>

        <div className="form-row">

          <div className="form-group">
            <label>Year</label>
            <input
              type="text"
              defaultValue={year}
            />
          </div>

          <div className="form-group">
            <label>Graduation Year</label>
            <input
              type="text"
              defaultValue={graduationYear}
            />
          </div>

        </div>

        <button
          type="button"
          className="save-btn"
        >
          Save Changes
        </button>

      </form>

    </div>
  );
}