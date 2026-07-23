import ApplicationCard from "../components/ApplicationCard";
import AddApplicationModal from "../components/AddApplicationModal";
import EmptyState from "../components/EmptyState";
import AppLayout from "../layouts/AppLayout";
import "../styles/ApplicationsPage.css";
import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import api from "../api/axios";

export default function ApplicationsPage() {
    const [applications, setApplications] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [selectedApplication, setSelectedApplication] = useState(null);

const [stats, setStats] = useState({
    total: 0,
    applied: 0,
    interview: 0,
    offer: 0,
    rejected: 0,
    responseRate: 0
});

const fetchApplications = async () => {

    try {

        const response = await api.get("/applications");

        console.log(response.data);

        setApplications(response.data);

    } catch (error) {

        console.error(error);

    }

};

const fetchApplicationStats = async () => {

    try {

        const response = await api.get("/applications/stats");

        setStats(response.data);

    } catch (error) {

        console.error("Error fetching application stats:", error);

    }

};

const refreshApplications = () => {

    fetchApplications();

    fetchApplicationStats();

};

const deleteApplication = async (id) => {

    const confirmed = window.confirm(
        "Are you sure you want to delete this application?"
    );

    if (!confirmed) return;

    try {

        await api.delete(`/applications/${id}`);

        refreshApplications();
    } catch (error) {

        console.error("Error deleting application:", error);

    }

};

useEffect(() => {

   refreshApplications();

}, []);

    
    return (
        <AppLayout>
            <div className="app-page">

                {/* Header */}
                <div className="header-row">
                    <div className="app-header">
                        <h6>CAREER</h6>
                        <h2>Applications</h2>
                        <p>{stats.total} total · {stats.responseRate}% response rate</p>
                    </div>

                    <button
    type="button"
    className="add"
    onClick={() => {

        setSelectedApplication(null);

        setIsModalOpen(true);

    }}
>
    <FiPlus />
    <span>Add</span>
</button>
                </div>

                {/* Summary Cards */}
                <div className="summary">

                    <div className="summ-card applied">
                        <h4>{stats.applied}</h4>
                        <p>Applied</p>
                    </div>

                    <div className="summ-card interview">
                        <h4>{stats.interview}</h4>
                        <p>Interview</p>
                    </div>

                    <div className="summ-card offer">
                        <h4>{stats.offer}</h4>
                        <p>Offer</p>
                    </div>

                    <div className="summ-card rejected">
                        <h4>{stats.rejected}</h4>
                        <p>Rejected</p>
                    </div>

                </div>

                {/* Pipeline */}
                <div className="pipeline">

                    <div className="pipeline-header">
                        <h6>PIPELINE</h6>
                    </div>

                    {applications.length === 0 ? (
                        <EmptyState
                            icon={<span>📬</span>}
                            title="No applications yet"
                            description="Track every opportunity you pursue in one place, from applications to interviews and offers."
                            actionLabel="Log your first application"
                            onAction={() => setIsModalOpen(true)}
                        />
                    ) : (
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
    key={app.application_id}
    company={app.company_name}
    role={app.role}
    appliedDate={app.applied_date}
    onClick={() => {
        setSelectedApplication(app);
        setIsModalOpen(true);
    }}
    onDelete={() =>
        deleteApplication(app.application_id)
    }
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
    key={app.application_id}
    company={app.company_name}
    role={app.role}
    appliedDate={app.applied_date}
    onClick={() => {
        setSelectedApplication(app);
        setIsModalOpen(true);
    }}
    onDelete={() =>
        deleteApplication(app.application_id)
    }
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
    key={app.application_id}
    company={app.company_name}
    role={app.role}
    appliedDate={app.applied_date}
    onClick={() => {
        setSelectedApplication(app);
        setIsModalOpen(true);
    }}
    onDelete={() =>
        deleteApplication(app.application_id)
    }
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
    key={app.application_id}
    company={app.company_name}
    role={app.role}
    appliedDate={app.applied_date}
    onClick={() => {
        setSelectedApplication(app);
        setIsModalOpen(true);
    }}
    onDelete={() =>
        deleteApplication(app.application_id)
    }
/>
                                ))
                            }

                        </div>

                    </div>
                    )}

                </div>

            </div>

<AddApplicationModal
    isOpen={isModalOpen}
    selectedApplication={selectedApplication}
    onClose={() => {
        setIsModalOpen(false);
        setSelectedApplication(null);
    }}
    onApplicationAdded={() => {
        refreshApplications();
    }}
/>

        </AppLayout>
    );
}