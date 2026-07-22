import logo from "../assets/veloralogo.png"
import "../styles/Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
           <nav>
        
               <div className="leftsection">
                <img src={logo} alt="Velora logo"/>
                <h2>Velora</h2>
               </div>
        
              <div className="centersection">
                <a href="#features">Features</a>
                <a href="#howitworks">How it works</a>
              </div>
        
        
              <div className="rightsection">
              <Link to="/login">Log in</Link>
              <Link to="/login"><button>Get Started Free</button></Link>
              </div>
        
           </nav>
    )
}