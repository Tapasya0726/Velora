import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import logo from "../assets/veloralogo.png";
import "../styles/SignUpPage.css";

export default function SignUpPage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [university, setUniversity] = useState("");
    const [major, setMajor] = useState("");
    const [year, setYear] = useState("");
    const [graduationYear, setGraduationYear] = useState("");

    const navigate = useNavigate();

    const handleSignup = async (e) => {

        e.preventDefault();

        try {

            await api.post("/signup", {

                name,
                email,
                password,
                university,
                major,
                year,
                graduation_year: graduationYear

            });

            alert("Account created successfully! Please log in to continue.");

            navigate("/login");

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Signup failed."
            );

        }

    };

    return (

        <>
            <nav>

                <div className="leftsection">
                    <img src={logo} alt="Velora logo" />
                    <h2>Velora</h2>
                </div>

                <div className="rightsection">

                    <p>Have an account?</p>

                    <Link to="/login">
                        <button>Log in</button>
                    </Link>

                </div>

            </nav>

            <div className="signup-page">
                <section className="signup-form">

                    <div className="form-header">

                        <h2>Create your account</h2>

                        <p>Create your Velora workspace and get started.</p>

                    </div>

                    <form
                        className="form-inputs"
                        onSubmit={handleSignup}
                    >

                    <label className="field-label">
                        <span>Full Name</span>
                        <span className="required-mark">*</span>
                    </label>

                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label className="field-label">
                        <span>Email</span>
                        <span className="required-mark">*</span>
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <div className="input-row">

                        <div className="input-group">

                            <label className="field-label">
                                <span>University</span>
                                <span className="required-mark">*</span>
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your university"
                                value={university}
                                onChange={(e) => setUniversity(e.target.value)}
                                required
                            />

                        </div>

                        <div className="input-group">

                            <label className="field-label">
                                <span>Major</span>
                                <span className="required-mark">*</span>
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your major"
                                value={major}
                                onChange={(e) => setMajor(e.target.value)}
                                required
                            />

                        </div>

                    </div>

                    <div className="input-row">

                        <div className="input-group">

                            <label className="field-label">
                                <span>Current Year</span>
                                <span className="required-mark">*</span>
                            </label>

                            <input
                                type="number"
                                placeholder="e.g. 3"
                                min="1"
                                max="4"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                required
                            />

                        </div>

                        <div className="input-group">

                            <label className="field-label">
                                <span>Graduation Year</span>
                                <span className="required-mark">*</span>
                            </label>

                            <input
                                type="number"
                                placeholder="e.g. 2028"
                                min="2000"
                                max="2100"
                                value={graduationYear}
                                onChange={(e) => setGraduationYear(e.target.value)}
                                required
                            />

                        </div>

                    </div>

                    <label className="field-label">
                        <span>Password</span>
                        <span className="required-mark">*</span>
                    </label>

                    <input
                        type="password"
                        placeholder="Minimum 8 characters"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">
                        Create Account →
                    </button>

                </form>

                    <div className="form-footer">

                        <p>Already a member?</p>

                        <Link to="/login">
                            Log in →
                        </Link>

                    </div>

                </section>
            </div>

        </>

    );

}