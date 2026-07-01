import {FaUserCircle} from "react-icons/fa";
import logo from "../assets/veloralogo.png";
import "../styles/MainNavbar.css";

export default function MainNavbar(){
    return(
        <>
        <nav>
            
        <div className="leftsection">
            <img src={logo} alt="Velora logo"/>
            <h2>Velora</h2>
            </div>   

        <div className="centersection">
           <input type="text" placeholder="Search notes,tasks.."/>
            </div> 

        <div className="rightsection">
           <button><FaUserCircle />
            <span>Tapasya Raghuwanshi</span></button> 
        </div>
        </nav>
        
        
        </>




    );
}