import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/veloralogo.png";
import "../styles/MainNavbar.css";

export default function MainNavbar(){
    const [user, setUser] = useState(null);

useEffect(() => {

    const loadUser = () => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        setUser(storedUser);
    };

    loadUser();

    window.addEventListener("userUpdated", loadUser);

    return () => {
        window.removeEventListener("userUpdated", loadUser);
    };

}, []);
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
           <Link
    to="/settings"
    className="navbar-profile-btn"
>

    <div className="navbar-profile-avatar">

        {
            user
                ? user.name
                      .split(" ")
                      .map(word => word[0])
                      .join("")
                      .substring(0,2)
                      .toUpperCase()
                : "U"
        }

    </div>

    <span>

        {user ? user.name : "User"}

    </span>

</Link>
        </div>
        </nav>
        
        
        </>




    );
}