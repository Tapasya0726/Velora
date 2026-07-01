import "../styles/Footer.css"
import logo from "../assets/veloralogo.png";

export default function Footer(){
    return(
      
<footer className="footer">
  <div className="footer-left">
    <div className="footer-logo">
      <img src={logo} alt="Velora logo" />
      <h2>Velora</h2>
    </div>
    <p>
      © 2026 Velora. Student Workspace SaaS.
    </p>
  </div>

  <div className="footer-right">
    <a href="#">Privacy</a>
    <a href="#">Terms</a>
    <a href="#">Contact</a>
  </div>
</footer>

    );
}