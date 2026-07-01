import { FaTasks } from "react-icons/fa"
import { HiOutlineDocumentText } from "react-icons/hi"
import { MdWorkOutline } from "react-icons/md"
import { GiProgression } from "react-icons/gi"
import { FaBrain } from "react-icons/fa"
import { FaFileAlt } from "react-icons/fa"
import "../styles/Features.css"

export default function Features(){
    return(
        
       <section className="features" id="features">
        <div className="features-header">
          <h6>WHAT'S INSIDE</h6>
          <h2>One workspace.<br/>
          Every student need.
          </h2>
          <p>No more switching between five apps. 
            Velora gives you<br/>
            everything in one focused, distraction-free place.
            </p>
        </div>
      
      <div className="cards">
      
        <div className="card">
        <div className="icon">
          <FaTasks />
        </div>
        <div>
          <h3>Task & deadline manager</h3>
        <p>Create tasks with priorities and due dates. <br/>
        Never miss a deadline. Calendar view and<br/>
         recurring tasks built in.</p>
        </div>
      </div>
      
      <div className="card">
        <div className="icon">
          <HiOutlineDocumentText />
        </div>
        <div>
        <h3>Notes & resources</h3>
        <p>Rich-text notes with folders, files, and tags.<br/>
         Attach links and resources to each note.</p>
      </div>
      </div>
      
      
      <div className="card">
        <div className="icon">
          <MdWorkOutline />
        </div>
        <div>
          <h3>Internship tracker
      </h3>
      <p>Track every application from wishlist to <br/>
      offer.Follow-up reminders, and response stats.</p>
        </div>
      </div>
      
      <div className="card">
        <div className="icon">
          <GiProgression />
        </div>
        <div>
          <h3>Skill progress</h3>
          <p>Log your skills, set proficiency levels, and <br/>
          get roadmap suggestions toward your target role.</p>  
          </div>
      </div>
      
      <div className="card">
        <div className="icon">
          <FaBrain />
        </div>
        <div>
          <h3>Focus mode</h3>
          <p>Pomodoro timer, daily goal-setting, streak<br/>
           tracking, and weekly productivity scores<br/>
            to keep momentum.</p>
        </div>
      </div>
      
      <div className="card">
        <div className="icon">
      <FaFileAlt />
        </div>
        <div>
          <h3>Resume builder</h3>
          <p>Build and upload resume inside<br/>
           Velora. Multiple versions, PDF export, <br/>
           and improvement tips.</p>
        </div>
      </div>
      </div>
      </section>
      

    )
}