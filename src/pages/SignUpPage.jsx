import logo from "../assets/veloralogo.png";
import "../styles/SignUpPage.css";

export default function SignUpPage(){
    return(

        <>
        <nav>
            <div className="leftsection">
                <img src={logo} alt="Velora logo"/>
                <h2>Velora</h2>
            </div>

            <div className="rightsection">
                <p>Have an account?</p>
                <button>Log in</button>
            </div>
        </nav>

        <section className="signup-form">
            <div className="form-header">
                <h2>Create your account</h2>
                <p>Create your Velora workspace and get started. </p>
            </div>

            <form className="form-inputs">
                <label>Full name</label>
                <input type="text" placeholder="enter your name"/>
                <label>Email</label>
                <input type="email" placeholder="enter your email"/>
                <div className="input-row">
                   <div className="input-group">
                <label>University</label>
                <input type="text" placeholder="enter your uni name"/>
                </div>
                 <div className="input-group">
                <label>Year</label>
                <input type="text" placeholder="enter your current year"/>
                </div>
                </div>
                <label>Password</label>
                <input type="password" placeholder="min. 8 characters"/>
                <button>Create account →</button>
            </form>
            <div className="form-footer">
                <p>Already a member?</p>
                <a href="#">Log in →</a>
            </div>


        </section>
        
        
        
        </>
    );

}