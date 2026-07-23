import "../styles/HowItWorks.css"

export default function HowItWorks(){
    return(

        <section className="howitworks" id="howitworks">
          <div className="work-header">
          <h6>GETTING STARTED</h6>
          <h2>Up and running<br/>
        in three minutes.</h2>
        </div>
        
        <div className="step-cards">
        <div className="step-card">
          <div className="step-no">
            1
          </div>
         <div> <h3>Create your account</h3>
          <p>Sign up with your email. Tell Velora your university and 
          graduation year. That's it.</p>
        </div>
        </div>
        
        <div className="step-card">
          <div className="step-no">
            2
          </div>
          <div>
            <h3>Add your first task</h3>
            <p>Drop in your assignments, project milestones, or application <br/>
            deadlines. Velora will remind you before it's too late.</p>
          </div>
        </div>
        
        <div className="step-card">
          <div className="step-no">
            3
          </div>
          <div>
            <h3>Track everything in one place</h3>
            <p>Your dashboard shows you what's due, where you stand on<br/>
             internship prep, and how your skills are growing — every morning.</p>
          </div>
        </div>
        </div>
        </section>
        

    )
}