import MainSidebar from "../components/MainSidebar";
import MainNavbar from "../components/MainNavbar";
import "../styles/AppLayout.css";

export default function AppLayout({children}){
    return(
        <>
        <MainNavbar/>
        <MainSidebar/>
        <main className="page-content">
        {children}
        </main>
        </>
    );
}

