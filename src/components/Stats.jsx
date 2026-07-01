import "../styles/Stats.css"

export default function Stats(){
    return(

    <section className="stats">
      <div className="stats-header">
        <h6>BY THE NUMBERS</h6>
        <h2>Students who use<br/>
         Velora land internships<br/>
         faster.</h2>
      </div>
    
      <div className="stats-row">
        <div className="stats-no">
          <h2>2.4k</h2>
          <p>Active students</p>
        </div>
    
        <div className="stats-no">
          <h2>68%</h2>
          <p>Get an offer within 6 months</p>
        </div>
    
        <div className="stats-no">
          <h2>4.8★</h2>
          <p>Average rating</p>
        </div>
    
      </div>
    </section>
    ); 
}