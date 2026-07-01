import logo from "../assets/veloralogo.png"
import "../styles/Navbar.css"
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
                <a href="#">Pricing</a>
              </div>
        
        
              <div className="rightsection">
              <a href="#">Log in</a>
              <button>Get Started Free</button>
              </div>
        
           </nav>
    )
}