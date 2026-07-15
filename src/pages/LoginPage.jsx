import api from "../api/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/veloralogo.png";
import "../styles/LoginPage.css";

function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post("/login", {
                email,
                password
            });

            localStorage.setItem("token", response.data.token);

            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            console.log("Login Successful");
            console.log(response.data);

            navigate("/dashboard");

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Invalid Email or Password"
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
                    <p>No account?</p>

                    <Link to="/signup">
                        <button>Sign up free</button>
                    </Link>

                </div>

            </nav>

            {/* Login Page Wrapper */}

            <div className="login-page">

                <section className="login-card">

                    <div className="card-header">
                        <h2>Welcome Back!</h2>
                        <p>Log in to your workspace</p>
                    </div>

                    <form
                        className="card-form"
                        onSubmit={handleLogin}
                    >

                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Link to="#">
                            Forgot Password?
                        </Link>

                        <button type="submit">
                            Log in
                        </button>

                    </form>

                    <div className="card-footer">

                        <p>No account?</p>

                        <Link to="/signup">
                            Create one free →
                        </Link>

                    </div>

                </section>

            </div>

        </>
    );
}

export default LoginPage;