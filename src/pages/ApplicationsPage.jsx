import ApplicationCard from "../components/ApplicationCard";
import AppLayout from "../layouts/AppLayout";
import "../styles/ApplicationsPage.css";

export default function ApplicationsPage() {

    const applications = [
        {
            id: 1,
            company: "Google",
            role: "Software Engineer Intern",
            status: "Applied",
            appliedDate: "Jun 26"
        },
        {
            id: 2,
            company: "Microsoft",
            role: "Frontend Intern",
            status: "Interview",
            appliedDate: "Jun 24"
        },
        {
            id: 3,
            company: "Cisco",
            role: "Backend Intern",
            status: "Offer",
            appliedDate: "Jun 20"
        },
        {
            id: 4,
            company: "Adobe",
            role: "UI/UX Intern",
            status: "Rejected",
            appliedDate: "Jun 18"
        },
        {
            id: 5,
            company: "Nvidia",
            role: "AI/ML Intern",
            status: "Applied",
            appliedDate: "Jun 12"
        },
        {
            id: 6,
            company: "Cisco",
            role: "Cloud Computing Intern",
            status: "Interview",
            appliedDate: "Jun 11"
        }
    ];

    return (
        <AppLayout>
            <div className="app-page">

                {/* Header */}
                <div className="header-row">
                    <div className="app-header">
                        <h6>CAREER</h6>
                        <h2>Applications</h2>
                        <p>{applications.length} total · 43% response rate</p>
                    </div>

                    <button className="add">+ Add</button>
                </div>

                {/* Summary Cards */}
                <div className="summary">

                    <div className="summ-card applied">
                        <h4>{applications.filter(app => app.status === "Applied").length}</h4>
                        <p>Applied</p>
                    </div>

                    <div className="summ-card interview">
                        <h4>{applications.filter(app => app.status === "Interview").length}</h4>
                        <p>Interview</p>
                    </div>

                    <div className="summ-card offer">
                        <h4>{applications.filter(app => app.status === "Offer").length}</h4>
                        <p>Offer</p>
                    </div>

                    <div className="summ-card rejected">
                        <h4>{applications.filter(app => app.status === "Rejected").length}</h4>
                        <p>Rejected</p>
                    </div>

                </div>

                {/* Pipeline */}
                <div className="pipeline">

                    <div className="pipeline-header">
                        <h6>PIPELINE</h6>
                    </div>

                    <div className="major-cards">

                        {/* Applied */}
                        <div className="major-card applied">

                            <div className="major-card-header">
                                <h6>APPLIED</h6>
                                <span>{applications.filter(app => app.status === "Applied").length}</span>
                            </div>

                            {applications
                                .filter(app => app.status === "Applied")
                                .map(app => (
                                    <ApplicationCard
                                        key={app.id}
                                        company={app.company}
                                        role={app.role}
                                        appliedDate={app.appliedDate}
                                    />
                                ))
                            }

                        </div>

                        {/* Interview */}
                        <div className="major-card interview">

                            <div className="major-card-header">
                                <h6>INTERVIEW</h6>
                                <span>{applications.filter(app => app.status === "Interview").length}</span>
                            </div>

                            {applications
                                .filter(app => app.status === "Interview")
                                .map(app => (
                                    <ApplicationCard
                                        key={app.id}
                                        company={app.company}
                                        role={app.role}
                                        appliedDate={app.appliedDate}
                                    />
                                ))
                            }

                        </div>

                        {/* Offer */}
                        <div className="major-card offer">

                            <div className="major-card-header">
                                <h6>OFFER</h6>
                                <span>{applications.filter(app => app.status === "Offer").length}</span>
                            </div>

                            {applications
                                .filter(app => app.status === "Offer")
                                .map(app => (
                                    <ApplicationCard
                                        key={app.id}
                                        company={app.company}
                                        role={app.role}
                                        appliedDate={app.appliedDate}
                                    />
                                ))
                            }

                        </div>

                        {/* Rejected */}
                        <div className="major-card rejected">

                            <div className="major-card-header">
                                <h6>REJECTED</h6>
                                <span>{applications.filter(app => app.status === "Rejected").length}</span>
                            </div>

                            {applications
                                .filter(app => app.status === "Rejected")
                                .map(app => (
                                    <ApplicationCard
                                        key={app.id}
                                        company={app.company}
                                        role={app.role}
                                        appliedDate={app.appliedDate}
                                    />
                                ))
                            }

                        </div>

                    </div>

                </div>

            </div>
        </AppLayout>
    );
}