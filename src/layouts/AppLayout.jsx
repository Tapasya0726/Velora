import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MainSidebar from "../components/MainSidebar";
import MainNavbar from "../components/MainNavbar";
import "../styles/AppLayout.css";

export default function AppLayout({ children }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <>
            <MainNavbar onMenuToggle={() => setIsMobileMenuOpen((prev) => !prev)} isMenuOpen={isMobileMenuOpen} />
            <MainSidebar isOpen={isMobileMenuOpen} onLinkClick={() => setIsMobileMenuOpen(false)} />
            <div
                className={`mobile-nav-overlay ${isMobileMenuOpen ? "visible" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
            />
            <main className="page-content">{children}</main>
        </>
    );
}

