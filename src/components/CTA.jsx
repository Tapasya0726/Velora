import "../styles/CTA.css"
import { Link } from "react-router-dom";

export default function CTA(){
    return(
        
    <section className="cta">
      <div className="cta-content">
        <h2>Ready to get organised?</h2>
        <p>Free to start. No credit card. Works on every device.</p>
        <Link to="/signup"><button>Create your workspace →</button></Link>
      </div>
    
    </section>
    );
}