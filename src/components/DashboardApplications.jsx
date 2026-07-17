import "../styles/DashboardApplications.css"

export default function DashboardApplications({
    applicationStats
}){
    return(
        <section className="applications">
            <div className="apps-header">
                <h3>Applications</h3>
                <a href="#">Manage →</a>
            </div>
        <div className="apps-grid">
            <div className="apps-card applied">
                <span className="number">{applicationStats.applied}</span>
                <span className="label">Applied</span>
            </div>

            <div className="apps-card interview">
                <span className="number">{applicationStats.interview
}</span>
                <span className="label">Interview</span>
            </div>

            <div className="apps-card offer">
                <span className="number">{applicationStats.offer}</span>
                <span className="label">Offer</span>
            </div>

            <div className="apps-card rejected">
                <span className="number">{applicationStats.rejected}</span>
                <span className="label">Rejected</span>
                </div> 
        </div>
        </section>
    );
}