import "../styles/RoadmapResource.css";
import { FaBookOpen, FaYoutube } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function RoadmapResource({
  title,
  resourceType,
  url,
}) {

  const icon =
    resourceType === "Video"
      ? <FaYoutube />
      : <FaBookOpen />;

  return (
    <div className="resource-card">

      <div className="resource-header">

        <div className="resource-info">

          <div className="resource-icon">
            {icon}
          </div>

          <div>
            <h4>{title}</h4>
            <p>{resourceType}</p>
          </div>

        </div>

      </div>

      <div className="resource-footer">

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <button className="start-btn" type="button">
            <FiExternalLink />
            <span>Start Learning</span>
          </button>
        </a>

      </div>

    </div>
  );
}