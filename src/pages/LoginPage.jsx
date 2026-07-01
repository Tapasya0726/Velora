import logo from "../assets/veloralogo.png";
import "../styles/LoginPage.css";

function LoginPage(){
    return(

        <>
        
        <nav>
            <div className="leftsection">
                <img src={logo} alt="Velora logo"/>
                <h2>Velora</h2>
            </div>

            <div className="rightsection">
                <p>No account?</p>
                <button>Sign up free</button>
            </div>
        </nav>

    <section className="login-card">
    <div className="card-header">
        <h2>Welcome Back!</h2>
        <p>Log in to your workspace</p>
    </div>
    <form className="card-form">
        <label>Email</label>
        <input type="email" placeholder="enter your email" />
        <label>Password</label>
        <input type="password" placeholder="enter your password"/>
        <a href="#">Forgot Password?</a>
        <button>Log in</button>

    </form>

    <div className="card-footer">
        
        <p>No account?</p>
        <a href="#">Create one free →</a>

    </div>
    </section>

        </>
    );

}

export default LoginPage;