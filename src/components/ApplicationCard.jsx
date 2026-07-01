import "../styles/ApplicationCard.css"

export default function ApplicationCard({company,role,appliedDate})
{
    return(
        <div className="application-card">
            <div className="application-header">
                <h6>{company}</h6>
                <p>{role}</p>
            </div>

            <div className="application-footer">
                <span>📅 Applied {appliedDate}</span>
            </div>
        </div>


    );

}